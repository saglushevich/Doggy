import styled from "styled-components";

export const Wrapper = styled.li`
  max-width: 1050px;
  margin: 0 auto;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["10xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["4xl"]}px;
    }
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  }
`;

export const Price = styled.span`
  display: block;
`;

export const Description = styled(Title)`
  font-weight: ${({ theme }) => theme.fontWeights.s};
  margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps.l}px;
  }
`;
