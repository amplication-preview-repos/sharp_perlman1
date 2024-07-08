import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  price?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  subject?: SubjectWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
