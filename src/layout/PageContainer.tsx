import { ReactNode } from "react";

import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Discount from "@components/UI/Discount";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <Discount />
      {children}
      <Footer />
    </>
  );
}
