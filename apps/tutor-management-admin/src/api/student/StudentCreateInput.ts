import { LessonCreateNestedManyWithoutStudentsInput } from "./LessonCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lessons?: LessonCreateNestedManyWithoutStudentsInput;
};
