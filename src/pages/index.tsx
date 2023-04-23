import Promo from "@components/Promo";
import Trending from "@components/Trending";
import SignUp from "@components/SignUp";
import Catalog from "@components/Catalog";

import { PageContainer } from "../layout/PageContainer";

function Homepage() {
    return (
        <PageContainer>
            <Promo />
            <Trending>
                <SignUp />
            </Trending>
            <Catalog title="Dog Collars"/>
            <Catalog title="Animal Carry Ons"/>
        </PageContainer>
    )
}

export default Homepage;