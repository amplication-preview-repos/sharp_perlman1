import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LessonCreateInput = {
  status?: "Option1" | null;
  price?: number | null;
  date?: Date | null;
  subject?: SubjectWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
