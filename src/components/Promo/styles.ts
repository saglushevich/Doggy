import styled from "styled-components";

import dog from "@assets/images/promo_dog.webp";

export const Wrapper = styled.div`
  overflow: hidden;
  background: radial-gradient(
      102.62% 34.54% at 100% 51.91%,
      #eec8bd 0%,
      #efc7bd 48.44%,
      rgba(241, 204, 195, 0) 100%
    ),
    radial-gradient(
      122.16% 14.5% at 100% 92.37%,
      #f2cdc4 0%,
      #eec9bf 57.81%,
      rgba(241, 204, 195, 0) 100%
    ),
    radial-gradient(
      63.16% 40.2% at 75.8% 0%,
      #ecc7be 0%,
      #ecc7be 57.81%,
      rgba(241, 204, 195, 0) 100%
    ),
    radial-gradient(
      200.85% 69.69% at 50% 61.2%,
      #edc7be 0.99%,
      #edc8bf 50.91%,
      #f1cdc1 100%
    );
`;

export const Image = styled.div`
  padding-top: 130px;
  background: url(${dog}) 170px -80px / cover no-repeat;
`;

export const Content = styled.div`
  padding-left: ${({ theme }) => theme.gaps["7xl"]};
  width: 580px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-size: ${({ theme }) => theme.lineHeights["2xl"]};
  border-radius: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.h2`
  max-width: 430px;
  font-size: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  font-weight: 700;
  font-size: 63px;
  line-height: 76px;
  border-radius: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps["5xl"]};
`;

export const Button = styled.button`
  background: #e89b93;
  border-radius: ${({ theme }) => theme.borderSizes.l};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["2xl"]}`};
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: 1px solid #e89b93;
  margin: 65px 0 140px 100px;
`;
