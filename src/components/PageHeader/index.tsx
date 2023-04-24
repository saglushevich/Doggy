import { IPageHeader } from "@interfaces";
import { Container } from "@layout";
import { SectionHeader } from "@styles";

import { Subtitle } from "./styles";

function PageHeader({ title, subtitle }: IPageHeader) {
  return (
    <Container>
      <SectionHeader>{title}</SectionHeader>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default PageHeader;
