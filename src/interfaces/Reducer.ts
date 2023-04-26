export interface IReducer {
  onInputChange: (field: string) => React.ChangeEventHandler<HTMLInputElement>;
  onSetCalendarDate?: (value: string) => void;
}
