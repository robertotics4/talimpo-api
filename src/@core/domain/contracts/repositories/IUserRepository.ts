import { User } from '@core/domain';

export abstract class UserRepository {
  abstract create(
    data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User>;
}
