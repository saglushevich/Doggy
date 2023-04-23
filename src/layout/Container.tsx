import { ReactNode } from "react";
import { Wrapper } from "./styles";

export function Container({ children }: { children: ReactNode}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
