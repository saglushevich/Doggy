import styled from "styled-components";

export const Wrapper = styled.div`
  width: 435px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 445px;
  padding: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-top: 55px;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.s};
  color: ${({ theme }) => theme.colors.black};
`;

export const Category = styled(Title)`
  margin-top: 5px;
`;

export const Price = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights["4xl"]};
  margin-top: ${({ theme }) => theme.gaps.m};
`;
