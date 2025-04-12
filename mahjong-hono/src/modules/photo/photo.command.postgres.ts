import {PrismaClient} from '../../generated/client';
import {PhotoCommandInterface} from './photo.command';
import {Photo} from './photo.entity';
import {Tag} from './tag/tag.entity';

export class PhotoCommandPostgres implements PhotoCommandInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async addTag(photo: Photo, tag: Tag): Promise<Photo> {
    const newPhotoTag = await this.prisma.photoTag.create({
      data: {
        photoId: photo.id(),
        tagId: tag.id(),
      },
      include: {tag: true},
    });

    return Photo.reconstruct({
      id: photo.id(),
      fileName: photo.fileName(),
      date: photo.date(),
      tags: [
        ...photo.tags().map(photoTag => ({
          id: photoTag.id,
          name: photoTag.name,
        })),
        {
          id: newPhotoTag.tag.id,
          name: newPhotoTag.tag.name,
        },
      ],
    });
  }

  public async removeTag(photo: Photo, tag: Tag): Promise<Photo> {
    await this.prisma.photoTag.delete({
      where: {
        photoId_tagId: {
          photoId: photo.id(),
          tagId: tag.id(),
        },
      },
    });

    return Photo.reconstruct({
      id: photo.id(),
      fileName: photo.fileName(),
      date: photo.date(),
      tags: photo.tags().filter(photoTag => photoTag.id !== tag.id()),
    });
  }
}
