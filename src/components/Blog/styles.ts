import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 65px 0 120px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps["4xl"]} 0`};
  }
`;

export const Article = styled.article`
  padding: ${({ theme }) => `${theme.gaps["3xl"]} ${theme.gaps.xl} 0`};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: ${({ theme }) => `${theme.gaps.xl} 0 0`};
  }
`;

export const ArticleTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: ${({ theme }) => theme.lineHeights.m};
  }
`;

export const ImageWrapper = styled.div`
  width: 630px;
  height: 560px;
  padding: ${({ theme }) => theme.gaps.xs};
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    height: 450px;
    margin-bottom: ${({ theme }) => theme.gaps.xl};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 400px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Paragraph = styled.p`
  width: 720px;
  padding: 0 100px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: 46px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 0 ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: ${({ theme }) => theme.lineHeights.l};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const ParagraphEnd = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.gaps["8xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]};
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["9xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["5xl"]};
    }
  }
`;
