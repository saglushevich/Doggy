import { INITIAL_STATE } from "@constants";

export interface IReducer {
  onInputChange: (field: string) => React.ChangeEventHandler<HTMLInputElement>;
  onSetCalendarDate?: (value: string) => void;
  values?: typeof INITIAL_STATE;
}
