import { Subject } from "../subject/Subject";
import { Student } from "../student/Student";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  price: number | null;
  date: Date | null;
  subject?: Subject | null;
  student?: Student | null;
};
