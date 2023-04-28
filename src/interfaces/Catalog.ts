import { ICatalogCard } from "./CatalogCard";

export interface ICatalog {
  title: string;
  buttonText: string;
  products: ICatalogCard[];
}
