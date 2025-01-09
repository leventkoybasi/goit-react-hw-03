import * as Yup from "yup";

const searchSchema = Yup.string()
  .required("Search term is required")
  .min(3, "Search term must be at least 3 characters")
  .matches(/^[a-zA-Z0-9 ]+$/, "Search term can only contain letters, numbers, and spaces");

export default searchSchema;
