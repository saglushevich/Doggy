import { Container } from "@components/layout";
import { SectionHeader } from "@styles";

import { Subtitle } from "./styles";
import { IPageHeader } from "./types";

function PageHeader({ title, subtitle }: IPageHeader) {
  return (
    <Container>
      <SectionHeader>{title}</SectionHeader>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default PageHeader;
