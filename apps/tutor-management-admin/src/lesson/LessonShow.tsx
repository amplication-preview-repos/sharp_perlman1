import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const LessonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Status" source="status" />
        <TextField label="Price" source="price" />
        <TextField label="Date" source="date" />
        <ReferenceField label="Subject" source="subject.id" reference="Subject">
          <TextField source={SUBJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
