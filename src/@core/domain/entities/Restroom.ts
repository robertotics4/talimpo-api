export class Restroom {
  id: string;
  name: string;
  description?: string;
  isPublic: boolean;
  rating: number;
  establishmentType: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    restroom: Omit<Restroom, 'id' | 'rating' | 'createdAt' | 'updatedAt'>,
  ) {
    Object.assign(this, restroom);
  }
}
