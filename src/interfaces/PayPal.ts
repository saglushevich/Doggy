import { INITIAL_STATE } from "@constants";

export interface IPayPal {
  appointment: typeof INITIAL_STATE;
  onChangePaymentMessage: (message: string) => void;
}
