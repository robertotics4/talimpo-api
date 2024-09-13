import { AuthUserDto } from '@app/user/dtos';

export type AuthData = {
  user: {
    id: string;
    name: string;
  };
  token: string;
  tokenExpirationInSeconds: number;
};

export interface IAuthUserUseCase {
  execute(dto: AuthUserDto): Promise<AuthData>;
}
