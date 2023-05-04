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
    width: 405px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    padding: 0 5px;
  }
`;

export const Discount = styled.div`
  padding: ${({ theme }) => `${theme.gaps.s}px 0`};
  background: #f3ded7;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  }
`;