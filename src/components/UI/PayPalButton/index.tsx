import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IPayPal } from "@interfaces";
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { ButtonsWrapper } from "./styles";

function PayPalButton({ onChangePaymentMessage, appointment }: IPayPal) {
  const { t } = useTranslation();
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
              onChangePaymentMessage(t("success message"));
              localStorage.setItem("appointment", JSON.stringify(appointment));
            })
            .catch(() => {
              onChangePaymentMessage(t("error message"));
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
