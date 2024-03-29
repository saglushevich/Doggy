import { Form } from "formik";
import Link from "next/link";
import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";
import { IStyles } from "@types";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.gaps.s}px ${theme.gaps.xxs}`};
  margin-top: ${({ theme }) => theme.gaps["9xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) => `${theme.gaps.xs}px ${theme.gaps.xxs}`}
    margin-top: ${({ theme }) => theme.gaps["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["5xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const InnerWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.gaps["6xl"]}px ${theme.gaps.xxs} ${theme.gaps["9xl"]}px`};
  background: ${({ theme }) => theme.colors.primaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) =>
      `${theme.gaps["2xl"]}px ${theme.gaps.xxs} ${theme.gaps["3xl"]}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding: ${({ theme }) =>
      `${theme.gaps.l}px ${theme.gaps.xxs} ${theme.gaps.xl}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: ${({ theme }) =>
      `${theme.gaps.m}px ${theme.gaps.xxs} ${theme.gaps.xl}px`};
  }
`;

export const Block = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
    &:nth-last-child(2) {
      display: block;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    line-height: ${({ theme }) => theme.lineHeights.xl}px;
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const FooterLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const FooterForm = styled(Form)`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
  }
`;

export const FormMessage = styled(Title)`
  margin-top: ${({ theme }) => theme.gaps.s}px;
  margin-bottom: ${({ theme }) => theme.gaps["8xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    text-align: center;
  }
`;

export const Input = styled(SectionInput)`
  width: ${({ theme }) => theme.sizes["5xl"]}px;
  padding: ${({ theme }) => `${theme.gaps.l}px ${theme.gaps.xl}px`};
  margin-right: ${({ theme }) => theme.gaps["2xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-right: ${({ theme }) => theme.positions.xs}px;
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.s}px ${theme.gaps["3xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.gaps.l}px;
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  padding-left: ${({ theme }) => theme.gaps["3xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    justify-content: center;
  }
`;

export const Social = styled(Link)<IStyles>`
  cursor: pointer;
  display: block;
  width: ${({ theme }) => theme.gaps["4xl"]}px;
  height: ${({ theme }) => theme.gaps["2xl"]}px;
  background: ${({ image }) => `url(${image}) center center/contain no-repeat`};
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["6xl"]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: ${({ theme }) => theme.sizes.xs}px;
    height: ${({ theme }) => theme.sizes.xs}px;
    &:nth-last-child(n + 2) {
      margin-right: ${({ theme }) => theme.gaps["2xl"]}px;
    }
  }
`;

export const Privacy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes.m}%;
  padding: ${({ theme }) => `${theme.gaps.xxs} ${theme.gaps.l}px`};
  padding-top: ${({ theme }) => theme.gaps.m}px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
  }
`;

export const PrivacyBlock = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: ${({ theme }) => `${theme.gaps.xs}px ${theme.gaps.xxs}`};
  }
`;

export const PrivacyInfo = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;
