import { LessonUpdateManyWithoutSubjectsInput } from "./LessonUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  description?: string | null;
  lessons?: LessonUpdateManyWithoutSubjectsInput;
};
