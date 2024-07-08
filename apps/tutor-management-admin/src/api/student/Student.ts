import { Lesson } from "../lesson/Lesson";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  firstName: string | null;
  lessons?: Array<Lesson>;
};
