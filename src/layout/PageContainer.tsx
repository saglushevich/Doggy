import { ReactNode } from "react";

import Footer from "@components/Footer";
import Discount from "@components/UI/Discount";
import Navigation from "@components/UI/Navigation";

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
