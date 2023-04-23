import { PageContainer } from "@layout";

import ProductInfo from "@components/ProductInfo";
import Dog from "@components/Dog";

function InfoPage() {
    return (
        <PageContainer>
            <ProductInfo/>
            <Dog />
        </PageContainer>
    );
}

export default InfoPage;