import { useState } from "react";
import { useTranslation } from "react-i18next";

import { MODAL_FIELDS } from "@constants";
import { usePayPal } from "@hooks";
import { PayPalButtons } from "@paypal/react-paypal-js";

import {
  ButtonsWrapper,
  ModalCloseBtn,
  ModalContent,
  ModalHighlighted,
  ModalText,
  ModalWrapper,
} from "./styles";
import { IModal } from "./types";

function Modal({ toggleModalStatus, appointment }: IModal) {
  const [paymentMessage, setPaymentMessage] = useState("");
  const { t } = useTranslation();

  const onChangePaymentMessage = (message: string) => {
    setPaymentMessage(message);
  };

  const fields = MODAL_FIELDS.map(({ id, field }) => {
    const appointmentField = appointment[field as keyof typeof appointment];

    return (
      <ModalText key={id}>
        {t(field)}: <ModalHighlighted>{appointmentField}</ModalHighlighted>
      </ModalText>
    );
  });

  const payPalConfig = usePayPal({ onChangePaymentMessage, appointment });

  return (
    <ModalWrapper onClick={toggleModalStatus}>
      <ModalContent>
        {paymentMessage ? (
          <ModalText>{paymentMessage}</ModalText>
        ) : (
          <>
            {fields}
            <ButtonsWrapper>
              <PayPalButtons {...payPalConfig} />
            </ButtonsWrapper>
          </>
        )}
      </ModalContent>
      <ModalCloseBtn onClick={toggleModalStatus}>&times;</ModalCloseBtn>
    </ModalWrapper>
  );
}

export default Modal;
