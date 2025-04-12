import {Photo} from './photo.entity';
import {PhotoQueryInterface} from './photo.query';
import {PrismaClient} from '../../generated/client';

export class PhotoQueryPostgres implements PhotoQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async list(param: {limit: number; date: Date; tagId?: string; lastId?: string}): Promise<Photo[]> {
    const {limit, date, tagId, lastId} = param;

    // FIXME: 本当はValueObject作るとかしたほうがいい
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const photos = await this.prisma.photo.findMany({
      where: {
        // FIXME: 本当はaccountIdを指定する
        // accountId: 'clx00000000000000000000000',

        createdAt: {
          gte: startDate,
          lte: endDate,
        },

        photoTags: tagId
          ? {
              some: {
                tagId: tagId,
              },
            }
          : undefined,

        id: lastId
          ? {
              lt: lastId,
            }
          : undefined,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
        {
          id: 'desc',
        },
      ],
      take: limit,
      include: {
        photoTags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return photos.map(photo =>
      Photo.reconstruct({
        id: photo.id,
        fileName: photo.fileName,
        date: photo.createdAt,
        tags: photo.photoTags.map(photoTag => ({
          id: photoTag.tag.id,
          name: photoTag.tag.name,
        })),
      })
    );
  }

  public async find(param: {id: string}): Promise<Photo | undefined> {
    const {id} = param;

    const photo = await this.prisma.photo.findUnique({
      where: {id},
      include: {photoTags: {include: {tag: true}}},
    });

    if (!photo) return;

    return Photo.reconstruct({
      id: photo.id,
      fileName: photo.fileName,
      date: photo.createdAt,
      tags: photo.photoTags.map(photoTag => ({
        id: photoTag.tag.id,
        name: photoTag.tag.name,
      })),
    });
  }
}
