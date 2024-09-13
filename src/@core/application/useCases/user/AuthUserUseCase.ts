import { AuthUserDto } from '@app/user/dtos';
import {
  AuthData,
  IAuthUserUseCase,
  UserRepository,
  Encryptor,
  JsonWebToken,
} from '@core/domain';
import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthUserUseCase implements IAuthUserUseCase {
  private readonly AUTHENTICATION_ERROR_MESSAGE = 'Usuário ou senha inválidos';

  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptor: Encryptor,
    private readonly jsonWebToken: JsonWebToken,
  ) {}

  async execute(dto: AuthUserDto): Promise<AuthData> {
    const user = await this.userRepository.findOne({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException(this.AUTHENTICATION_ERROR_MESSAGE);
    }

    const passwordMatch = await this.encryptor.compare(
      dto.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException(this.AUTHENTICATION_ERROR_MESSAGE);
    }

    const tokenExpirationInSeconds =
      this.jsonWebToken.getTokenExpirationInSeconds();
    const token = this.jsonWebToken.sign(
      {},
      process.env.JWT_HASH_MD5 as string,
      {
        subject: user.id.toString(),
        expiresIn: tokenExpirationInSeconds,
      },
    );

    return {
      user: { id: user.id, name: user.name },
      token,
      tokenExpirationInSeconds,
    };
  }
}
