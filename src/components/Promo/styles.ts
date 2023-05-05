import styled from "styled-components";

import dog from "@assets/images/promo_dog.webp";
import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  background: url(${dog}) center center / cover no-repeat;
  padding-bottom: ${({ theme }) => theme.gaps["13xl"]}px;
  width: ${({ theme }) => theme.sizes.m}%;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-bottom: ${({ theme }) => theme.gaps["10xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-bottom: ${({ theme }) => theme.gaps["7xl"]}px;
  }
`;

export const Content = styled.div`
  padding-top: ${({ theme }) => theme.gaps["13xl"]}px;
  padding-left: ${({ theme }) => theme.gaps["7xl"]}px;
  width: ${({ theme }) => theme.sizes["6xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-top: ${({ theme }) => theme.gaps["12xl"]}px;
    padding-left: ${({ theme }) => theme.positions.xs}px;
    width: ${({ theme }) => theme.sizes["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: ${({ theme }) => theme.gaps["8xl"]}px;
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["9xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["6xl"]}px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes["8xl"]}px;
    text-align: center;
    line-height: ${({ theme }) => theme.lineHeights["4xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    color: ${({ theme }) => theme.colors.white};
    text-shadow: ${({ theme }) => `${theme.colors.black} 0 0 2px`};
  }
`;

export const Subtitle = styled.h2`
  max-width: ${({ theme }) => theme.sizes["3xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["8xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["5xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["5xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Button = styled(SectionButton)`
  margin-top: ${({ theme }) => theme.gaps["7xl"]}px;
  margin-left: ${({ theme }) => theme.gaps["11xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: ${({ theme }) => `${theme.gaps["4xl"]}px auto ${theme.gaps.xxs}`};
  }
`;
