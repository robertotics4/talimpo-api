export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, user);
  }
}
