import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import {
  lazy,
  Suspense,
  SyntheticEvent,
  useCallback,
  useReducer,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { CLIENT_INFO, PAYMENT, PAYPAL_KEY } from "@constants";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paymentReducer } from "@utils";

import {
  Button,
  Cancelling,
  Forms,
  Input,
  Inputs,
  InputWrapper,
  Message,
  Requests,
  Selection,
  Title,
  Wrapper,
} from "./styles";

const LazyLocation = lazy(() => import("@components/UI/Location"));
const LazyModal = lazy(() => import("@components/Modal"));
const LazyCalendar = lazy(() => import("@components/Calendar"));
const LazyPayment = lazy(() => import("@components/UI/Payment"));

function Booking() {
  const [appointment, dispatch] = useReducer(paymentReducer, PAYMENT);

  const [modalStatus, setModalStatus] = useState(false);
  const { t } = useTranslation();

  const toggleModalStatus = (e?: SyntheticEvent) => {
    if (e?.target === e?.currentTarget) {
      setModalStatus((prevModalStatus) => !prevModalStatus);
    }
  };

  const initialOptions = {
    "client-id": PAYPAL_KEY as string,
    components: "buttons",
  };

  const formik = useFormik({
    initialValues: PAYMENT,
    validationSchema: CLIENT_INFO,
    onSubmit: () => {
      toggleModalStatus();
    },
  });

  const {
    values: { name, surname, phone, email },
    handleChange,
  } = formik;

  const onInputChange =
    (action: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: action, payload: e.target.value });
      handleChange(e);
    };

  const onSetCalendarDate = useCallback((value: string) => {
    dispatch({ type: "SET_DATE", payload: value });
  }, []);

  return (
    <Suspense>
      <PayPalScriptProvider deferLoading options={initialOptions}>
        <Container>
          <Wrapper>
            <Selection>
              <Title>{t("enter information")}</Title>
              <FormikProvider value={formik}>
                <Form>
                  <Forms>
                    <Inputs>
                      <InputWrapper>
                        <Input
                          name="name"
                          value={name}
                          onChange={onInputChange("SET_NAME")}
                          placeholder={t("name") as string}
                        />
                        <ErrorMessage name="name">
                          {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                      </InputWrapper>
                      <InputWrapper>
                        <Input
                          name="surname"
                          value={surname}
                          onChange={onInputChange("SET_SURNAME")}
                          placeholder={t("surname") as string}
                        />
                        <ErrorMessage name="surname">
                          {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                      </InputWrapper>
                    </Inputs>
                    <Inputs>
                      <InputWrapper>
                        <Input
                          value={email}
                          onChange={onInputChange("SET_EMAIL")}
                          placeholder="Email"
                          name="email"
                        />
                        <ErrorMessage name="email">
                          {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                      </InputWrapper>
                      <InputWrapper>
                        <Input
                          value={phone}
                          onChange={onInputChange("SET_PHONE")}
                          name="phone"
                          placeholder={t("phone") as string}
                        />
                        <ErrorMessage name="phone">
                          {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                      </InputWrapper>
                    </Inputs>
                    <LazyCalendar
                      onInputChange={onInputChange}
                      onSetCalendarDate={onSetCalendarDate}
                      values={appointment}
                    />
                    <Requests
                      onChange={onInputChange("SET_REQUEST")}
                      placeholder={t("special request") as string}
                      name="request"
                    />
                    <LazyPayment
                      onInputChange={onInputChange}
                      values={appointment}
                    />
                    <Cancelling>{t("cancelling")}</Cancelling>
                    <Button type="submit">{t("book appointment")}</Button>
                  </Forms>
                </Form>
              </FormikProvider>
            </Selection>
            <LazyLocation />
          </Wrapper>
          {modalStatus && (
            <LazyModal
              appointment={appointment}
              toggleModalStatus={toggleModalStatus}
            />
          )}
        </Container>
      </PayPalScriptProvider>
    </Suspense>
  );
}

export default Booking;
