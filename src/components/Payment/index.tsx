import applePay from "@assets/icons/applePay.svg";
import googlePay from "@assets/icons/googlePay.svg";
import visa from "@assets/icons/visa.svg";
import masterCard from "@assets/icons/masterCard.svg";
import amazon from "@assets/icons/amazon.svg";

import { 
    Wrapper, 
    PaymentTitle,
    PaymentInputs, PaymentMethods, 
    PaymentInput, PaymentInputLarge,
    PaymentMethod
} from "./styles";

function Payment() {
    return (
        <Wrapper>
            <PaymentTitle>Enter your payment information</PaymentTitle>
            <PaymentInputLarge placeholder="Credit Card Number"/>
            <PaymentInputs>
                <PaymentInput placeholder="Expiry Date"/>
                <PaymentInput placeholder="CVV"/>
            </PaymentInputs>
            <PaymentInputLarge placeholder="Name on Card"/>
            <PaymentMethods>
                <PaymentMethod src={applePay}/>
                <PaymentMethod src={googlePay}/>
                <PaymentMethod src={visa}/>
                <PaymentMethod src={masterCard}/>
                <PaymentMethod src={amazon}/>
            </PaymentMethods>
        </Wrapper>
    )
}

export default Payment;