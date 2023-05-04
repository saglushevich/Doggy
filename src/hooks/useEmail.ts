import { RefObject, useState } from "react";
import { useTranslation } from "react-i18next";

import { EMAIL_ID, EMAIL_KEY } from "@constants";
import emailjs from "@emailjs/browser";

export const useEmail = (
  emailTemplate: string,
  form: RefObject<HTMLFormElement>
) => {
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

  return { disabled, message, sendEmail, setMessage };
};
