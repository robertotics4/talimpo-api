export class Review {
  id: string;
  userId: string;
  restroomId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(review: Omit<Review, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, review);
  }
}
