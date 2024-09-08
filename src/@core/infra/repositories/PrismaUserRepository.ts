import { User, UserRepository } from '@core/domain';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaOrm/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    return await this.prismaService.user.create({ data });
  }
}
