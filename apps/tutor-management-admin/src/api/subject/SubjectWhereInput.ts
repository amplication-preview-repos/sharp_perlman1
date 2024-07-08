import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type SubjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
};
