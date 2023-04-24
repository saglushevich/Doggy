import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 65px 0 120px;
`;

export const Article = styled.article`
  padding: ${({ theme }) => `${theme.gaps["3xl"]} ${theme.gaps.xl} 0`};
`;

export const ArticleTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]};
`;

export const ImageWrapper = styled.div`
  width: 630px;
  height: 560px;
  padding: ${({ theme }) => theme.gaps.xs};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

export const ParagraphEnd = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.gaps["8xl"]};
`;

export const ArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["9xl"]};
  }
`;
