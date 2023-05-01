import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.gaps["6xl"]} 120px 0 ${theme.gaps["6xl"]}`};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 65px;
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => theme.gaps.s};
  width: 570px;
  height: 575px;
  background: #dfb2a9;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PackageName = styled.div`
  width: 400px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
`;

export const PackageInfo = styled.div`
  width: 600px;
  padding-top: 85px;
`;

export const PackagePrice = styled(PackageName)`
  color: #000;
`;

export const PackageDescription = styled(PackageName)`
  width: 600px;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: 27px;
  margin-top: ${({ theme }) => theme.gaps["4xl"]};
`;

export const PackageButton = styled(SectionButton)`
  margin: 0 auto;
  margin-top: 85px;
`;
