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

export const CLIENT_INFO = yup.object().shape({
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
  request: yup.string().max(40, "Enter 16 characters"),
  phone: yup
    .string()
    .min(6, "Minimum 6 characters!")
    .required("Phone is required"),
  cardNumber: yup
    .string()
    .min(16, "Enter 16 characters")
    .max(16, "Enter 16 characters")
    .required("Card number is required"),
  cardExpiry: yup
    .string()
    .min(5, "Enter 5 characters")
    .max(5, "Enter 5 characters")
    .required("Card dates are required"),
  cardCVV: yup
    .string()
    .min(3, "Enter 3 characters")
    .max(3, "Enter 3 characters")
    .required("Card CVV is required"),
  cardHolder: yup
    .string()
    .min(3, "Minimum 5 characters")
    .max(30, "Maximum 30 characters")
    .required("Card holder name is required"),
});
