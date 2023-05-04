import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.gaps["13xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: ${({ theme }) => theme.gaps["12xl"]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]}px 0 ${theme.gaps["6xl"]}px`};
  background: ${({ theme }) => theme.colors.primaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) => theme.gaps.xs}px;
  }
`;

export const Image = styled.img`
  display: block;
  width: ${({ theme }) => theme.sizes["7xl"]}px;
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
  font-size: ${({ theme }) => theme.fontSizes["8xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["5xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["5xl"]}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }
`;

export const Characteristics = styled.ul`
  margin-top: ${({ theme }) => theme.gaps["11xl"]}px;
  padding-left: ${({ theme }) => theme.gaps["6xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["9xl"]}px;
    padding-left: ${({ theme }) => theme.positions.xs}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
    padding-left: ${({ theme }) => theme.positions.xs}px;
  }
`;

export const Characteristic = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps.s}px;
    }
  }
`;
