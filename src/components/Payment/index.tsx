import { useTranslation } from "react-i18next";

import amazon from "@assets/icons/amazon.svg";
import applePay from "@assets/icons/applePay.svg";
import googlePay from "@assets/icons/googlePay.svg";
import masterCard from "@assets/icons/masterCard.svg";
import visa from "@assets/icons/visa.svg";
import { IReducer } from "@interfaces";

import {
  PaymentInput,
  PaymentInputLarge,
  PaymentInputs,
  PaymentMethod,
  PaymentMethods,
  PaymentTitle,
  Wrapper,
} from "./styles";

function Payment({ onInputChange }: IReducer) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <PaymentTitle>{t("payment info")}</PaymentTitle>
      <PaymentInputLarge
        onChange={onInputChange("SET_CARD_NUMBER")}
        placeholder={t("card number") as string}
      />
      <PaymentInputs>
        <PaymentInput
          onChange={onInputChange("SET_CARD_EXPIRY")}
          placeholder={t("expiry") as string}
        />
        <PaymentInput
          type="password"
          onChange={onInputChange("SET_CARD_CVV")}
          placeholder="CVV"
        />
      </PaymentInputs>
      <PaymentInputLarge
        onChange={onInputChange("SET_CARD_HOLDER")}
        placeholder={t("name on card") as string}
      />
      <PaymentMethods>
        <PaymentMethod src={applePay} />
        <PaymentMethod src={googlePay} />
        <PaymentMethod src={visa} />
        <PaymentMethod src={masterCard} />
        <PaymentMethod src={amazon} />
      </PaymentMethods>
    </Wrapper>
  );
}

export default Payment;
