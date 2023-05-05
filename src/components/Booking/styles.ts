import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.gaps["15xl"]}px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps["6xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) => theme.positions.xs}px;
  }
`;

export const Selection = styled.div`
  padding-bottom: ${({ theme }) => theme.gaps["8xl"]}px;
  width: ${({ theme }) => theme.sizes["8xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    width: ${({ theme }) => theme.sizes["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Forms = styled.div`
  margin-top: ${({ theme }) => theme.gaps["7xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes["8xl"]}px;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    width: ${({ theme }) => theme.sizes["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    display: block;
    margin-bottom: ${({ theme }) => theme.positions.xs}px;
  }
`;

export const Input = styled(SectionInput)`
  width: ${({ theme }) => theme.sizes.xl}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }
`;

export const InputWrapper = styled.div``;

export const Requests = styled(Input)`
  width: ${({ theme }) => theme.sizes.m}%;
  padding: ${({ theme }) => `${theme.gaps.l}px ${theme.gaps.m}px`};
  line-height: ${({ theme }) => theme.lineHeights.s}px;
  margin-top: ${({ theme }) => theme.gaps["7xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.positions.xs}px;
  }
`;

export const Cancelling = styled.p`
  display: block;
  width: ${({ theme }) => theme.sizes["4xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: ${({ theme }) => theme.lineHeights.xs}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps.l}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.xs}px ${theme.gaps["8xl"]}px`};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
`;

export const Message = styled.div`
  width: ${({ theme }) => theme.sizes.xl}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
`;
