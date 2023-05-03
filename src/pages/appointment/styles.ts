import styled from "styled-components";

import appointmentDog from "@assets/images/appointmentDog.webp";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: 835px;
  background: url(${appointmentDog}) center center/ cover no-repeat;
  padding-top: 95px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 600px;
  }
`;

export const Title = styled.h1`
  width: ${({ theme }) => theme.sizes["4xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 55px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 52px;
    line-height: 68px;
  }
`;
