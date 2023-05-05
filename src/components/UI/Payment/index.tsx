import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "formik";

import { PAYMENT } from "@mocks";
import { IPayment } from "@types";
import { makeCardFormat } from "@utils";

import {
  InputWrapper,
  Message,
  PaymentInput,
  PaymentInputLarge,
  PaymentInputs,
  PaymentMethod,
  PaymentMethods,
  PaymentTitle,
  Wrapper,
} from "./styles";

function Payment({ onInputChange, values }: IPayment) {
  const { t } = useTranslation();

  const paymentsMethods = useMemo(
    () =>
      PAYMENT.map(({ id, icon }) => {
        return <PaymentMethod key={id} src={icon} />;
      }),
    []
  );

  const { cardNumber, cardCVV, cardExpiry, cardHolder } = values;

  return (
    <Wrapper>
      <PaymentTitle>{t("payment info")}</PaymentTitle>
      <PaymentInputLarge
        name="cardNumber"
        value={makeCardFormat(cardNumber, 4, " ")}
        onChange={onInputChange("SET_CARD_NUMBER")}
        placeholder={t("card number") as string}
        maxLength={19}
      />
      <ErrorMessage name="cardNumber">
        {(msg) => <Message>{t(msg)}</Message>}
      </ErrorMessage>
      <PaymentInputs>
        <InputWrapper>
          <PaymentInput
            name="cardExpiry"
            value={makeCardFormat(cardExpiry, 2, "/")}
            onChange={onInputChange("SET_CARD_EXPIRY")}
            placeholder={t("expiry") as string}
            maxLength={5}
          />
          <ErrorMessage name="cardExpiry">
            {(msg) => <Message>{t(msg)}</Message>}
          </ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <PaymentInput
            type="password"
            value={makeCardFormat(cardCVV, 3, "")}
            name="cardCVV"
            onChange={onInputChange("SET_CARD_CVV")}
            placeholder="CVV"
            maxLength={3}
          />
          <ErrorMessage name="cardCVV">
            {(msg) => <Message>{t(msg)}</Message>}
          </ErrorMessage>
        </InputWrapper>
      </PaymentInputs>
      <InputWrapper>
        <PaymentInputLarge
          value={cardHolder.replace(/[0-9]/gi, "")}
          onChange={onInputChange("SET_CARD_HOLDER")}
          name="cardHolder"
          type="text"
          placeholder={t("name on card") as string}
        />
        <ErrorMessage name="cardHolder">
          {(msg) => <Message>{t(msg)}</Message>}
        </ErrorMessage>
      </InputWrapper>
      <PaymentMethods>{paymentsMethods}</PaymentMethods>
    </Wrapper>
  );
}

export default Payment;
