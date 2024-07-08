import { LessonUpdateManyWithoutStudentsInput } from "./LessonUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lessons?: LessonUpdateManyWithoutStudentsInput;
};
