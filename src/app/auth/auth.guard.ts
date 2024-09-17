import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { UserRepository } from '@core/domain';

interface IPayload {
  sub: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    console.log({ token });

    try {
      const { sub: userId, ...rest } = jwt.verify(
        token,
        process.env.JWT_HASH_MD5 as string,
      ) as IPayload;

      console.log({ userId, rest });

      const user = await this.userRepository.findOne({ id: userId });

      console.log({ user });

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      request.user = { id: userId };
    } catch (error) {
      console.log({ error });
      throw new UnauthorizedException('Token inválido');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
