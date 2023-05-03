import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 165px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 115px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]}px 0 ${theme.gaps["6xl"]}px`};
  background: #f3ded7;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: 5px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 730px;
  height: ${({ theme }) => theme.sizes["4xl"]}px;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    height: 320px;
  }
`;

export const InfoText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: 64px;
  line-height: 78px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["5xl"]}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights.xl}px;
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }
`;

export const Characteristics = styled.ul`
  margin-top: 110px;
  padding-left: ${({ theme }) => theme.gaps["6xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["9xl"]}px;
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
    padding-left: 0;
  }
`;

export const Characteristic = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.black};
  &:nth-child(1) {
    color: #000000;
  }
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps.s}px;
    }
  }
`;
