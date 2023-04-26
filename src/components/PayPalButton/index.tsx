import { useEffect } from "react";

import { IPayPal } from "@interfaces";
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { ButtonsWrapper } from "./styles";

function PayPalButton({ onChangePaymentMessage, appointment }: IPayPal) {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: { ...options },
    });
  }, []);

  const payPalConfig: PayPalButtonsComponentProps = {
    createOrder: (_, actions) =>
      actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "300",
            },
          },
        ],
      }),
    onApprove: (_, actions) =>
      actions.order
        ? actions.order
            .capture()
            .then(() => {
              onChangePaymentMessage(
                "Success! Thank you! We will contact you as soon as possibly!"
              );
              localStorage.setItem("appointment", JSON.stringify(appointment));
            })
            .catch(() => {
              onChangePaymentMessage(
                "Something went wrong! Do not worry. Try again later!"
              );
            })
        : Promise.resolve().then(() => {
            throw new Error("Error with Paypal API");
          }),
  };
  return (
    <ButtonsWrapper>
      <PayPalButtons {...payPalConfig} />
    </ButtonsWrapper>
  );
}

export default PayPalButton;
