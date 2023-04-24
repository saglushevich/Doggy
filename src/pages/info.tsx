import Dog from "@components/Dog";
import ProductInfo from "@components/ProductInfo";
import { PageContainer } from "@layout";

function InfoPage() {
  return (
    <PageContainer>
      <ProductInfo />
      <Dog />
    </PageContainer>
  );
}

export default InfoPage;
