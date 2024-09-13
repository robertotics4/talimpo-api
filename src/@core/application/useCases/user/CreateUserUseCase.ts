import { CreateUserDto } from '@app/user/dtos';
import { ICreateUserUseCase, User, UserRepository } from '@core/domain';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const userAlreadyExists = await this.userRepository.findOne({
      email: dto.email,
    });

    if (userAlreadyExists) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    return await this.userRepository.create(dto);
  }
}
