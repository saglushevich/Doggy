import styled from "styled-components";

import appointmentDog from "@assets/images/appointmentDog.webp";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: 835px;
  background: url(${appointmentDog}) center center/ cover no-repeat;
  padding-top: ${({ theme }) => theme.gaps["11xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 600px;
  }
`;

export const Title = styled.h1`
  width: ${({ theme }) => theme.sizes["4xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["9xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["6xl"]}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.gaps["6xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-left: ${({ theme }) => theme.positions.xs}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["8xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights["4xl"]}px;
  }
`;

export const HeadTitle = styled.title``;
