import { object, string, number } from "yup";

export const newsLetterSchema = object({
  email: string()
    .email("Please provide valid email")
    .required("Email is required"),
});
export const FilterSchema = object({
  title: string(),
  location: string(),
  salary: number(),
  //   date: string(),
  type: string(),
});
