import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.gaps["11xl"]}px;
  padding-bottom: ${({ theme }) => theme.gaps["12xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    padding: ${({ theme }) =>
      `${theme.gaps["11xl"]}px ${theme.gaps["6xl"]}px ${theme.gaps["12xl"]}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) => `${theme.gaps["6xl"]}px 0 0`};
  }
`;

export const InputWrapper = styled.div`
  display: block;
`;

export const Input = styled(SectionInput)`
  width: 605px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-bottom: ${({ theme }) => theme.gaps["3xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }
`;

export const TextArea = styled.textarea`
  width: ${({ theme }) => theme.sizes.m}%;
  height: 315px;
  resize: none;
  padding: ${({ theme }) => theme.gaps["2xl"]}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  line-height: ${({ theme }) => theme.lineHeights.xs}px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderSizes.m}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 200px;
  }
`;

export const FormMessage = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["9xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.s}px ${theme.gaps["9xl"]}px`};
  margin: 0 auto;
  margin-top: 65px;
  margin-bottom: ${({ theme }) => theme.gaps.xl}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
  }
`;
