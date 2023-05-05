import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.gaps["6xl"]}px ${theme.gaps["12xl"]}px 0 ${theme.gaps["6xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.gaps["7xl"]}px;
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => theme.gaps.s}px;
  width: ${({ theme }) => theme.sizes["6xl"]}px;
  height: ${({ theme }) => theme.sizes["6xl"]}px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;

export const PackageName = styled.div`
  width: ${({ theme }) => theme.sizes["2xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
`;

export const PackageInfo = styled.div`
  width: ${({ theme }) => theme.sizes["6xl"]}px;
  padding-top: ${({ theme }) => theme.gaps["9xl"]}px;
`;

export const PackagePrice = styled(PackageName)`
  color: ${({ theme }) => theme.colors.black};
`;

export const PackageDescription = styled(PackageName)`
  width: ${({ theme }) => theme.sizes["6xl"]}px;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
`;

export const PackageButton = styled(SectionButton)`
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["9xl"]}px;
`;
