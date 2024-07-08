import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  price?: SortOrder;
  date?: SortOrder;
  subjectId?: SortOrder;
  studentId?: SortOrder;
};
