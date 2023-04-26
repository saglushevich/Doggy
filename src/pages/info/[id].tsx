import { GetServerSideProps } from "next";

import Dog from "@components/Dog";
import { PageContainer } from "@layout";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/dogs?name=${id}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "FZvdT5D6gVW1zV6qMdv5tw==1H3a9TU340W7LAKZ",
      },
    }
  );

  const selectedDog = await response.json();

  return {
    props: {
      selectedDog: selectedDog[0],
    },
  };
};

function SelectedDog({ selectedDog }: { selectedDog: any }) {
  return (
    <PageContainer>
      <Dog selectedDog={selectedDog} />
    </PageContainer>
  );
}

export default SelectedDog;
