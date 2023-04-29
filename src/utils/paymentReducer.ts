import { PAYMENT } from "@constants";

type TAction = {
  type: string;
  payload: string;
};

export function paymentReducer(state: typeof PAYMENT, action: TAction) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SURNAME":
      return { ...state, surname: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_REQUEST":
      return { ...state, request: action.payload };
    case "SET_CARD_NUMBER":
      return { ...state, cardNumber: action.payload };
    case "SET_CARD_EXPIRY":
      return { ...state, cardExpiry: action.payload };
    case "SET_CARD_CVV":
      return { ...state, cardCVV: action.payload };
    case "SET_CARD_HOLDER":
      return { ...state, cardHolder: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
}
