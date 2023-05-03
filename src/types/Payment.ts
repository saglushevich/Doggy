import { PAYMENT } from "@constants";

export interface IPayment {
  onInputChange: (field: string) => React.ChangeEventHandler<HTMLInputElement>;
  onSetCalendarDate?: (value: string) => void;
  values: typeof PAYMENT;
}
