import { LessonCreateNestedManyWithoutSubjectsInput } from "./LessonCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  description?: string | null;
  lessons?: LessonCreateNestedManyWithoutSubjectsInput;
};
