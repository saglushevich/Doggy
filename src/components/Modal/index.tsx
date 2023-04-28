import { useState } from "react";
import { useTranslation } from "react-i18next";

import PayPalButton from "@components/UI/PayPalButton";
import { PAYPAL_KEY } from "@constants";
import { IModal } from "@interfaces";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import {
  ModalCloseBtn,
  ModalContent,
  ModalHighlighted,
  ModalRequest,
  ModalText,
  ModalWrapper,
} from "./styles";

function Modal({ toggleModalStatus, appointment }: IModal) {
  const [paymentMessage, setPaymentMessage] = useState("");
  const { t } = useTranslation();

  const initialOptions = {
    "client-id": PAYPAL_KEY as string,
    components: "buttons",
  };

  const onChangePaymentMessage = (message: string) => {
    setPaymentMessage(message);
  };

  const {
    name,
    surname,
    phone,
    email,
    request,
    cardNumber,
    cardExpiry,
    cardHolder,
    time,
    date,
  } = appointment;

  return (
    <PayPalScriptProvider deferLoading options={initialOptions}>
      <ModalWrapper onClick={toggleModalStatus}>
        <ModalContent>
          {paymentMessage ? (
            <ModalText>{paymentMessage}</ModalText>
          ) : (
            <>
              <ModalText>
                {t("name")}: <ModalHighlighted>{name}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("surname")}: <ModalHighlighted>{surname}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Email: <ModalHighlighted>{email}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("phone")}: <ModalHighlighted>{phone}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("date")}: <ModalHighlighted>{date}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("time")}: <ModalHighlighted>{time}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("card number")}:{" "}
                <ModalHighlighted>{cardNumber}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("expiry")}: <ModalHighlighted>{cardExpiry}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("name on card")}:{" "}
                <ModalHighlighted>{cardHolder}</ModalHighlighted>
              </ModalText>
              <ModalText>
                {t("requests")}: <ModalRequest>{request}</ModalRequest>
              </ModalText>
              <PayPalButton
                appointment={appointment}
                onChangePaymentMessage={onChangePaymentMessage}
              />
            </>
          )}
        </ModalContent>
        <ModalCloseBtn onClick={toggleModalStatus}>&times;</ModalCloseBtn>
      </ModalWrapper>
    </PayPalScriptProvider>
  );
}

export default Modal;
