import Dog from "@components/Dog";
import DogInfo from "@components/DogInfo";
import { PageContainer } from "@layout";

function InfoPage() {
  return (
    <PageContainer>
      <DogInfo />
      <Dog />
    </PageContainer>
  );
}

export default InfoPage;
