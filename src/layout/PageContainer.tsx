import { ReactNode } from "react";

import Discount from "@components/Discount";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

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
