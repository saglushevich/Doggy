import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]}px;
`;

export const Text = styled.p`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.m}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["8xl"]}px;
  &:before {
    content: "";
    position: absolute;
    width: ${({ theme }) => theme.sizes["6xl"]}px;
    top: -${({ theme }) => theme.positions.m}px;
    left: ${({ theme }) => theme.positions.l}%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
    &:before {
      width: ${({ theme }) => theme.sizes.s}%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    &:before {
      width: ${({ theme }) => theme.sizes.s}%;
    }
  }
`;

export const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;
