export interface Course {
  id?: number;
  title: string;
  description: string;
  teacherId: number;
  categoryId: number;
  status: string;
  createdAt?: Date;
  price:number;
}
