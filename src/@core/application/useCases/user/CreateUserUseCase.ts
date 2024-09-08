import { CreateUserDto } from '@app/user/dtos';
import { ICreateUserUseCase, User } from '@core/domain';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaOrm/prisma.service';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private prismaService: PrismaService) {}

  async execute(dto: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data: dto });
  }
}
