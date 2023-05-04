import styled from "styled-components";

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps.xl}px;
    font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights.xl}px;
  }
`;
