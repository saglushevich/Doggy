import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1490px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    width: 1350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps.xs}px`};
  }
`;

export const Discount = styled.div`
  padding: ${({ theme }) => `${theme.gaps.s}px 0`};
  background: ${({ theme }) => theme.colors.primaryLight};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  }
`;
