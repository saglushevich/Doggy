import styled from "styled-components";

import dog from "@assets/images/promo_dog.webp";
import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  background: url(${dog}) center center / cover no-repeat;
  padding-bottom: 140px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding-bottom: 90px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-bottom: ${({ theme }) => theme.gaps["7xl"]};
  }
`;

export const Content = styled.div`
  padding-top: 130px;
  padding-left: ${({ theme }) => theme.gaps["7xl"]};
  width: 580px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding-top: 120px;
    padding-left: 0;
    width: 370px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: ${({ theme }) => theme.gaps["8xl"]};
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  line-height: ${({ theme }) => theme.lineHeights["2xl"]};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 64px;
    text-align: center;
    line-height: 64px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    color: ${({ theme }) => theme.colors.white};
    text-shadow: #000 0 0 2px;
  }
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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    color: ${({ theme }) => theme.colors.white};
    text-shadow: #000 0 0 2px;
  }
`;

export const Button = styled(SectionButton)`
  margin-top: 65px;
  margin-left: 100px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: ${({ theme }) => theme.gaps["4xl"]} auto 0;
  }
`;
