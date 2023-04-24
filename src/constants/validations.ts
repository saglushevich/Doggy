import * as yup from "yup";

export const SUBSCRIBE_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const CONTACT_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 characters!")
    .max(30, "Maximum 30 characters!")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Minimum 2 characters!")
    .max(30, "Maximum 35 characters!")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number()
    .min(6, "Minimum 6 characters!")
    .required("Phone is required"),
  usermessage: yup
    .string()
    .min(20, "Minimum 20 characters!")
    .max(400, "Maximum 400 characters!")
    .required("Message is required"),
});
