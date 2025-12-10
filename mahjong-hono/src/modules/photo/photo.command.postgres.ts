import type {PrismaClient} from '../../generated/client';
import type {PhotoCommandInterface} from './photo.command';
import {Photo} from './photo.entity';
import type {Tag} from './tag/tag.entity';

export class PhotoCommandPostgres implements PhotoCommandInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(photo: Photo): Promise<Photo> {
    const _newPhoto = await this.prisma.photo.create({
      data: {
        // FIXME: 現状は固定値で入れておく。ごめん。
        accountId: 'c2e9e129-e6fd-407b-8b21-1f359d7c5b37',
        fileName: photo.fileName(),
        createdAt: photo.date(),
        updatedAt: photo.date(),
        photoTags: {
          create: photo.tags().map(tag => ({tagId: tag.id})),
        },
      },
    });

    return photo;
  }

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

  public async updateDescription(photo: Photo, description: string): Promise<Photo> {
    const updatedPhoto = await this.prisma.photo.update({
      where: {id: photo.id()},
      data: {description},
    });

    return Photo.reconstruct({
      id: updatedPhoto.id,
      fileName: updatedPhoto.fileName,
      date: updatedPhoto.createdAt,
      tags: photo.tags(),
      description: updatedPhoto.description ?? '',
    });
  }
}
