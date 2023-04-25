import { useTranslation } from "react-i18next";

import amazon from "@assets/icons/amazon.svg";
import applePay from "@assets/icons/applePay.svg";
import googlePay from "@assets/icons/googlePay.svg";
import masterCard from "@assets/icons/masterCard.svg";
import visa from "@assets/icons/visa.svg";

import {
  PaymentInput,
  PaymentInputLarge,
  PaymentInputs,
  PaymentMethod,
  PaymentMethods,
  PaymentTitle,
  Wrapper,
} from "./styles";

function Payment() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <PaymentTitle>{t("payment info")}</PaymentTitle>
      <PaymentInputLarge placeholder={t("card number") as string} />
      <PaymentInputs>
        <PaymentInput placeholder={t("expiry") as string} />
        <PaymentInput placeholder="CVV" />
      </PaymentInputs>
      <PaymentInputLarge placeholder={t("name on card") as string} />
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
