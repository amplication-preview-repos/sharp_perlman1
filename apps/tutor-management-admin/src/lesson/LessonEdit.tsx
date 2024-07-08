import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { SubjectTitle } from "../subject/SubjectTitle";
import { StudentTitle } from "../student/StudentTitle";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="subject.id" reference="Subject" label="Subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
