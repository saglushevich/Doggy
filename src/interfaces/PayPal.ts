import { PAYMENT } from "@constants";

export interface IPayPal {
  appointment: typeof PAYMENT;
  onChangePaymentMessage: (message: string) => void;
}
