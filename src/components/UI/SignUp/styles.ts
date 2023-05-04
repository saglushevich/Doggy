import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.positions.m}px;
  left: ${({ theme }) => theme.positions.l}%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.gaps.s}px;
  background: ${({ theme }) => theme.colors.secondary};
  width: 970px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    position: static;
    transform: translateX(0);
    width: ${({ theme }) => theme.sizes.m}%;
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.gaps["10xl"]}px ${theme.gaps["4xl"]}px ${theme.gaps["11xl"]}px ${theme.gaps["9xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) => `${theme.gaps["8xl"]}px ${theme.gaps["4xl"]}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: ${({ theme }) => theme.gaps.m}px;
  }
`;

export const Content = styled.div`
  width: 270px;
`;

export const SignTitle = styled.div`
  max-width: 200px;
  font-family: "Cinzel Decorative";
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SignDiscount = styled.div`
  max-width: 250px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps.l}px;
`;

export const SignInput = styled(SectionInput)`
  padding: ${({ theme }) => theme.gaps.m}px;
  margin-top: ${({ theme }) => theme.gaps.xl}px;
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes.m}%;
`;

export const SignButton = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.xs}px ${theme.gaps["3xl"]}px`};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
`;

export const FormMessage = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: ${({ theme }) => theme.gaps.m}px;
`;

export const SignText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  line-height: ${({ theme }) => theme.lineHeights.xs}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 230px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
`;

export const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.gaps.s}px;
  width: ${({ theme }) => theme.sizes["4xl"]}px;
  height: ${({ theme }) => theme.sizes["3xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;
