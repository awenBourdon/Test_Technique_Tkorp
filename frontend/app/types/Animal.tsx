export interface Animal {
    id: string;
    name: string;
    species?: string;
    age?: number;
    breed?: string;
    gender?: 'male' | 'female';
    description?: string;
  }