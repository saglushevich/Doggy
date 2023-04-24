import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";

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
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  //   const tMessage = t("We will contact");
  //   const tError = t("Something went wrong");

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      usermessage: "",
      surname: "",
      name: "",
    },
    validationSchema,
    onSubmit: () => {
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
            setMessage("We will contact you!");
          },
          () => setMessage("Something went wrong")
        )
        .finally(() => {
          formik.resetForm({});
          setDisabled(false);
        });
    },
  });

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 4000);
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
