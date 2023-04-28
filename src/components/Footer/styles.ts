import { Form } from "formik";
import Link from "next/link";
import styled from "styled-components";

import { IStyles } from "@interfaces";
import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.gaps.s} 0`};
  margin-top: ${({ theme }) => theme.gaps["9xl"]};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps.xs} 0`}
    margin-top: ${({ theme }) => theme.gaps["7xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["5xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const InnerWrapper = styled.div`
  padding: 55px 0 ${({ theme }) => theme.gaps["9xl"]};
  background: #f3ded7;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps["2xl"]} 0 ${theme.gaps["3xl"]}`};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: ${({ theme }) => `${theme.gaps.l} 0 ${theme.gaps.xl}`};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    padding: ${({ theme }) => `${theme.gaps.m} 0 ${theme.gaps.xl}`};
  }
`;

export const Block = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
    &:nth-last-child(2) {
      display: block;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["2xl"]};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    line-height: 36px;
    margin-bottom: ${({ theme }) => theme.gaps.l};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const FooterLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 26px;
  }
`;

export const FooterForm = styled(Form)`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
  }
`;

export const FormMessage = styled(Title)`
  margin-top: ${({ theme }) => theme.gaps.s};
  margin-bottom: ${({ theme }) => theme.gaps["8xl"]};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    text-align: center;
  }
`;

export const Input = styled(SectionInput)`
  width: 500px;
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps.xl}`};
  margin-right: ${({ theme }) => theme.gaps["2xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps["3xl"]}`};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.gaps.l};
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.gaps["2xl"]};
  padding-left: ${({ theme }) => theme.gaps["3xl"]};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: center;
  }
`;

export const Social = styled(Link)<IStyles>`
  cursor: pointer;
  display: block;
  width: 38px;
  height: 30px;
  background: ${({ image }) => `url(${image}) center center/contain no-repeat`};
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["6xl"]};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 25px;
    height: 25px;
    &:nth-last-child(n + 2) {
      margin-right: ${({ theme }) => theme.gaps["2xl"]};
    }
  }
`;

export const Privacy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1385px;
  padding-top: ${({ theme }) => theme.gaps.m};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    width: 95%;
  }
`;

export const PrivacyBlock = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: ${({ theme }) => `${theme.gaps.xs} 0`};
  }
`;

export const PrivacyInfo = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: 27px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
