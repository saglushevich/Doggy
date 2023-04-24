import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["9xl"]} 0 ${theme.gaps["6xl"]}`};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps["3xl"]} 0 0`};
  }
`;

export const Article = styled.article`
  padding: 0 130px;
  margin-top: 130px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    padding: 0 100px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `0 ${theme.gaps["5xl"]}`};
    margin-top: ${({ theme }) => theme.gaps["7xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: 0;
    margin-top: ${({ theme }) => theme.gaps["2xl"]};
  }
`;

export const ImageWrapper = styled.div`
  width: 490px;
  height: 480px;
  padding: ${({ theme }) => theme.gaps.xs};
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    height: 450px;
    margin: ${({ theme }) => `${theme.gaps.xl} 0`};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 340px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Paragraph = styled.p`
  width: 590px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["6xl"]};
  }

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

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: 160px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["5xl"]};
    }
  }
`;

export const Articles = styled.div``;
