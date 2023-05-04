import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  CONTACT_SCHEMA,
  EMAIL_ID,
  EMAIL_KEY,
  SUBSCRIBE_SCHEMA,
} from "@constants";
import emailjs from "@emailjs/browser";

type FormikSchema = typeof SUBSCRIBE_SCHEMA | typeof CONTACT_SCHEMA;

export const useContact = (
  validationSchema: FormikSchema,
  emailTemplate: string
) => {
  const form = useRef<HTMLFormElement>(null);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const sendEmail = () => {
    setDisabled(true);
    emailjs
      .sendForm(
        EMAIL_ID as string,
        emailTemplate as string,
        form.current as HTMLFormElement,
        EMAIL_KEY as string
      )
      .then(
        () => {
          setMessage(t("we will contact") as string);
        },
        () => setMessage(t("went wrong") as string)
      )
      .finally(() => {
        setDisabled(false);
      });
  };

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
