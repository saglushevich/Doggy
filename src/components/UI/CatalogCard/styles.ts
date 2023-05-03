import styled from "styled-components";

export const Wrapper = styled.div`
  width: 435px;
  cursor: pointer;
  &:nth-child(n + 4) {
    margin-top: ${({ theme }) => theme.gaps["9xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 235px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    &:nth-child(n + 2) {
      margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: 445px;
  padding: 5px;
  background: ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 325px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    height: 360px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;

export const Info = styled.div`
  margin-top: 55px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps.l}px;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  line-height: ${({ theme }) => theme.lineHeights.s}px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    line-height: ${({ theme }) => theme.lineHeights.xs}px;
  }
`;

export const Category = styled(Title)`
  margin-top: 5px;
`;

export const Price = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.s}px;
  margin-top: ${({ theme }) => theme.gaps.m}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    line-height: ${({ theme }) => theme.lineHeights.xs}px;
  }
`;
