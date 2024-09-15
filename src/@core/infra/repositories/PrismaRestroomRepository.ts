import { Restroom, RestroomRepository } from '@core/domain';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaOrm/prisma.service';

@Injectable()
export class PrismaRestroomRepository implements RestroomRepository {
  private readonly DEFAULT_RATING = 2.5;

  constructor(private readonly prismaService: PrismaService) {}

  async find(): Promise<Restroom[]> {
    return await this.prismaService.restroom.findMany({});
  }

  async create(
    data: Omit<Restroom, 'id' | 'rating' | 'createdAt' | 'updatedAt'>,
  ): Promise<Restroom> {
    const result = await this.prismaService.restroom.create({
      data: { ...data, rating: this.DEFAULT_RATING },
    });

    return result as any;
  }
}
