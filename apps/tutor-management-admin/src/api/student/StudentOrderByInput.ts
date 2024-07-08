import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
};
