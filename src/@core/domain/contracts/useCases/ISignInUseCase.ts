import { SignInDto } from '@app/auth/dtos';

export type SignInData = {
  user: {
    id: string;
    name: string;
  };
  token: string;
  tokenExpirationInSeconds: number;
};

export interface ISignInUseCase {
  execute(dto: SignInDto): Promise<SignInData>;
}
