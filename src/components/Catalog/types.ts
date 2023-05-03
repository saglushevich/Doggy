import { ICatalogCard } from "@types";

export interface ICatalog {
  title: string;
  buttonText: string;
  products: ICatalogCard[];
}
