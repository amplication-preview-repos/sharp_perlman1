import { Lesson } from "../lesson/Lesson";

export type Subject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  lessons?: Array<Lesson>;
};
