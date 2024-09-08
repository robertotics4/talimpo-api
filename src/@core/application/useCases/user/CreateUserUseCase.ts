import { CreateUserDto } from '@app/user/dtos';
import { ICreateUserUseCase, User, UserRepository } from '@core/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(dto);
  }
}
