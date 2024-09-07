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
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.avatarUrl = user.avatarUrl;
    this.password = user.password;
  }
}
