import { useState } from "react";

import PayPalButton from "@components/PayPalButton";
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
                Ваше имя: <ModalHighlighted>{name}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Ваша фамилия: <ModalHighlighted>{surname}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Email: <ModalHighlighted>{email}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Телефон: <ModalHighlighted>{phone}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Дата: <ModalHighlighted>{date}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Время: <ModalHighlighted>{time}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Номер карты: <ModalHighlighted>{cardNumber}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Срок действия: <ModalHighlighted>{cardExpiry}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Имя на карте: <ModalHighlighted>{cardHolder}</ModalHighlighted>
              </ModalText>
              <ModalText>
                Специальные пожелания: <ModalRequest>{request}</ModalRequest>
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
