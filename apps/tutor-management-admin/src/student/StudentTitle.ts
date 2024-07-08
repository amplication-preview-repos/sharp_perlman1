import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "lastName";

export const StudentTitle = (record: TStudent): string => {
  return record.lastName?.toString() || String(record.id);
};
