import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["9xl"]} 0 ${theme.gaps["6xl"]}`};
`;

export const Article = styled.article`
  padding: 0 130px;
  margin-top: 130px;
`;

export const ImageWrapper = styled.div`
  width: 490px;
  height: 480px;
  padding: ${({ theme }) => theme.gaps.xs};
  background: ${({ theme }) => theme.colors.secondary};
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
`;

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: 160px;
  }
`;

export const Articles = styled.div``;
