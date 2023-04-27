import { ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";

import { IReducer } from "@interfaces";
import { PAYMENT } from "@mocks";

import {
  PaymentInput,
  PaymentInputLarge,
  PaymentInputs,
  PaymentMethod,
  PaymentMethods,
  PaymentTitle,
  Wrapper,
} from "./styles";

function Payment({ onInputChange, values }: IReducer) {
  const { t } = useTranslation();

  const paymentsMethods = PAYMENT.map(({ id, icon }) => (
    <PaymentMethod key={id} src={icon} />
  ));

  const { cardNumber, cardCVV, cardExpiry, cardHolder } = values!;

  return (
    <Wrapper>
      <PaymentTitle>{t("payment info")}</PaymentTitle>
      <PaymentInputLarge
        name="cardNumber"
        value={cardNumber}
        onChange={onInputChange("SET_CARD_NUMBER")}
        placeholder={t("card number") as string}
      />
      <ErrorMessage name="cardNumber" />
      <PaymentInputs>
        <PaymentInput
          name="cardExpiry"
          value={cardExpiry}
          onChange={onInputChange("SET_CARD_EXPIRY")}
          placeholder={t("expiry") as string}
        />
        <ErrorMessage name="cardExpiry" />
        <PaymentInput
          type="password"
          value={cardCVV}
          name="cardCVV"
          onChange={onInputChange("SET_CARD_CVV")}
          placeholder="CVV"
        />
        <ErrorMessage name="cardCVV" />
      </PaymentInputs>
      <PaymentInputLarge
        value={cardHolder}
        onChange={onInputChange("SET_CARD_HOLDER")}
        name="cardHolder"
        type="text"
        placeholder={t("name on card") as string}
      />
      <ErrorMessage name="cardHolder" />

      <PaymentMethods>{paymentsMethods}</PaymentMethods>
    </Wrapper>
  );
}

export default Payment;
