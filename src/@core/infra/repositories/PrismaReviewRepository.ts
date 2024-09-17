import { Review, ReviewRepository } from '@core/domain';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaOrm/prisma.service';

@Injectable()
export class PrismaReviewRepository implements ReviewRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: Omit<Review, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Review> {
    return await this.prismaService.review.create({ data });
  }
}
