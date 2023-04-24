import styled from "styled-components";

import dog from "@assets/images/promo_dog.webp";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 785px;
  background: url(${dog}) center center / cover no-repeat;
`;

export const Content = styled.div`
  padding-top: 130px;
  padding-left: ${({ theme }) => theme.gaps["7xl"]};
  width: 580px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  line-height: ${({ theme }) => theme.lineHeights["2xl"]};
  color: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.h2`
  max-width: 430px;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  font-weight: 700;
  font-size: 63px;
  line-height: 76px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["5xl"]};
`;

export const Button = styled.button`
  background: #e89b93;
  border-radius: ${({ theme }) => theme.borderSizes.l};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["2xl"]}`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: 1px solid #e89b93;
  margin-top: 65px;
  margin-left: 100px;
`;
