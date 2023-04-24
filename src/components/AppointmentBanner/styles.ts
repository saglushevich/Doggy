import styled from "styled-components";

import appointmentDog from "@assets/images/appointmentDog.webp";

export const Wrapper = styled.div`
  width: 100%;
  height: 835px;
  background: url(${appointmentDog}) center center/ cover no-repeat;
  padding-top: 95px;
`;

export const Title = styled.h1`
  width: 480px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  line-height: ${({ theme }) => theme.lineHeights["2xl"]};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 55px;
`;
