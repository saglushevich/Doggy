export interface IModal {
  appointment: {
    name: string;
    surname: string;
    phone: string;
    email: string;
    request: string;
    cardNumber: string;
    cardCVV: string;
    cardExpiry: string;
    cardHolder: string;
    time: string;
    date: string;
  };
  toggleModalStatus?: () => void;
}
