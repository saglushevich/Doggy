import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.section`
  padding-top: ${({ theme }) => theme.gaps["8xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-top: ${({ theme }) => theme.gaps["5xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding-top: ${({ theme }) => theme.gaps.xl}px;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.gaps["9xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: ${({ theme }) => theme.gaps["6xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
    margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    margin-top: ${({ theme }) => theme.gaps.xl}px;
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.m}px ${theme.gaps["6xl"]}px`};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["7xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }
`;
