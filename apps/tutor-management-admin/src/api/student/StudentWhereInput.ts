import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
};
