import { ReactNode } from "react";

import Navigation from "@components/Navigation";
import Discount from "@components/Discount";
import Footer from "@components/Footer";

export function PageContainer({ children }: { children: ReactNode}) {
    return (
        <>
            <Navigation />
            <Discount />
            {children}
            <Footer/>
        </>
    )
}
