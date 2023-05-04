import { useFormik } from "formik";
import { useEffect, useRef } from "react";

import { CONTACT_SCHEMA, SUBSCRIBE_SCHEMA } from "@constants";
import { useEmail } from "@hooks";

type FormikSchema = typeof SUBSCRIBE_SCHEMA | typeof CONTACT_SCHEMA;

export const useContact = (
  validationSchema: FormikSchema,
  emailTemplate: string
) => {
  const form = useRef<HTMLFormElement>(null);
  const { disabled, message, sendEmail, setMessage } = useEmail(
    emailTemplate,
    form
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      usermessage: "",
      surname: "",
      name: "",
    },
    validationSchema,
    onSubmit(_, { resetForm }) {
      sendEmail();
      resetForm({});
    },
  });

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return {
    formik,
    form,
    disabled,
    message,
  };
};
