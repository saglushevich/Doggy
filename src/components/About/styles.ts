import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.gaps["9xl"]}px ${theme.gaps.xxs} ${theme.gaps["6xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) =>
      `${theme.gaps["3xl"]}px ${theme.gaps.xxs} ${theme.gaps.xxs}`};
  }
`;

export const Article = styled.article`
  padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps["13xl"]}px`};
  margin-top: ${({ theme }) => theme.gaps["13xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps["11xl"]}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps["5xl"]}px`};
    margin-top: ${({ theme }) => theme.gaps["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) => theme.positions.xs}px;
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }
`;

export const ImageWrapper = styled.div`
  width: 490px;
  height: ${({ theme }) => theme.sizes["4xl"]}px;
  padding: ${({ theme }) => theme.gaps.xs}px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    height: ${({ theme }) => theme.sizes["3xl"]}px;
    margin: ${({ theme }) => `${theme.gaps.xl}px ${theme.gaps.xxs}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    height: ${({ theme }) => theme.sizes["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: ${({ theme }) => theme.sizes.xl}px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;

export const Paragraph = styled.p`
  width: ${({ theme }) => theme.sizes["6xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.xl}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["6xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    padding: 0 ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["14xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["5xl"]}px;
    }
  }
`;

export const Articles = styled.div``;
