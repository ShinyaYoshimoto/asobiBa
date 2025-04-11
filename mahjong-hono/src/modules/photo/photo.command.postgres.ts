import {PrismaClient} from '../../generated/client';
import {PhotoCommandInterface} from './photo.command';
import {Photo} from './photo.entity';
import {Tag} from './tag/tag.entity';

export class PhotoCommandPostgres implements PhotoCommandInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async addTag(photo: Photo, tag: Tag): Promise<Photo> {
    const currentPhoto = await this.prisma.photo.findUnique({
      where: {id: photo.id()},
      include: {photoTags: {include: {tag: true}}},
    });

    if (!currentPhoto) {
      throw new Error('Photo not found');
    }

    const newPhotoTag = await this.prisma.photoTag.create({
      data: {
        photoId: photo.id(),
        tagId: tag.id(),
      },
      include: {tag: true},
    });

    return Photo.reconstruct({
      id: currentPhoto.id,
      fileName: currentPhoto.fileName,
      date: currentPhoto.createdAt,
      tags: [
        ...currentPhoto.photoTags.map(photoTag => ({
          id: photoTag.tag.id,
          name: photoTag.tag.name,
        })),
        {
          id: newPhotoTag.tag.id,
          name: newPhotoTag.tag.name,
        },
      ],
    });
  }
}
