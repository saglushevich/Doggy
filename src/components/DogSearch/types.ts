export interface ISearch {
  searchValue: string;
  onChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
