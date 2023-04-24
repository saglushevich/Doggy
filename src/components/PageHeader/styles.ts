import styled from "styled-components";

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  line-height: ${({ theme }) => theme.lineHeights.l};
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps.xl};
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    line-height: ${({ theme }) => theme.lineHeights.m};
  }
`;
