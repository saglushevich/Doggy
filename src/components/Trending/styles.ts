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
  padding-top: 65px;
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => theme.gaps.s}px;
  width: 570px;
  height: 575px;
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
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.xl}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
`;

export const PackageInfo = styled.div`
  width: 600px;
  padding-top: 85px;
`;

export const PackagePrice = styled(PackageName)`
  color: ${({ theme }) => theme.colors.black};
`;

export const PackageDescription = styled(PackageName)`
  width: 600px;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  line-height: 27px;
  margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
`;

export const PackageButton = styled(SectionButton)`
  margin: 0 auto;
  margin-top: 85px;
`;
