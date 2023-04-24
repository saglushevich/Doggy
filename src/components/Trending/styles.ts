import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["6xl"]} 120 0 ${theme.gaps["6xl"]}`};
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PackageName = styled.div`
  width: 400px;
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-size: ${({ theme }) => theme.lineHeights.xl};
  text-align: center;
  border-radius: ${({ theme }) => theme.colors.black};
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

export const PackageButton = styled.button`
  display: block;
  background: #dfb2a9;
  border-radius: ${({ theme }) => theme.borderSizes.l};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["4xl"]}`};
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid #dfb2a9;
  margin: 0 auto;
  margin-top: 85px;
  cursor: pointer;
`;
