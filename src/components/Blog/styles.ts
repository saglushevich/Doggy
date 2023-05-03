import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["7xl"]}px 0 ${theme.gaps["12xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) => `${theme.gaps["4xl"]}px 0`};
  }
`;

export const Article = styled.article`
  padding: ${({ theme }) => `${theme.gaps["3xl"]}px ${theme.gaps.xl}px 0`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) => `${theme.gaps.xl}px 0 0`};
  }
`;

export const ArticleTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.xl}px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights.m}px;
  }
`;

export const ImageWrapper = styled.div`
  width: 630px;
  height: 560px;
  padding: ${({ theme }) => theme.gaps.xs}px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    height: ${({ theme }) => theme.sizes["3xl"]}px;
    margin-bottom: ${({ theme }) => theme.gaps.xl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: ${({ theme }) => theme.sizes["2xl"]}px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;

export const Paragraph = styled.p`
  width: 720px;
  padding: 0 ${({ theme }) => theme.gaps["11xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: 46px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    padding: 0 ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights.l}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const ParagraphEnd = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.gaps["8xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["9xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["5xl"]}px;
    }
  }
`;
