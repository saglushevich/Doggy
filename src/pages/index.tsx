import Catalog from "@components/Catalog";
import Promo from "@components/Promo";
import SignUp from "@components/SignUp";
import Trending from "@components/Trending";

import { PageContainer } from "../layout/PageContainer";

function Homepage() {
  return (
    <PageContainer>
      <Promo />
      <Trending>
        <SignUp />
      </Trending>
      <Catalog title="Dog Collars" />
      <Catalog title="Animal Carry Ons" />
    </PageContainer>
  );
}

export default Homepage;
