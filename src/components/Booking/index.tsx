import { useTranslation } from "react-i18next";

import Calendar from "@components/Calendar";
import Location from "@components/Location";
import Payment from "@components/Payment";
import { Container } from "@layout";

import {
  Button,
  Cancelling,
  Form,
  Input,
  Inputs,
  Requests,
  Selection,
  Title,
  Wrapper,
} from "./styles";

function Booking() {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Selection>
          <Title>{t("enter information")}</Title>
          <Form>
            <Inputs>
              <Input placeholder={t("name") as string} />
              <Input placeholder={t("surname") as string} />
            </Inputs>
            <Inputs>
              <Input placeholder="Email" />
              <Input type="number" placeholder={t("phone") as string} />
            </Inputs>
            <Calendar />
            <Requests placeholder={t("special request") as string} />
            <Payment />
            <Cancelling>{t("cancelling")}</Cancelling>
            <Button>{t("book appointment")}</Button>
          </Form>
        </Selection>
        <Location />
      </Wrapper>
    </Container>
  );
}

export default Booking;
