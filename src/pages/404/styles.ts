import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding-top: ${({ theme }) => theme.gaps["6xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: ${({ theme }) => theme.gaps["3xl"]}px;
  }
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  }
`;

export const Button = styled(SectionButton)`
  margin: 0 auto;
  width: 300px;
  margin-top: ${({ theme }) => theme.gaps["5xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: auto;
    margin-top: ${({ theme }) => theme.gaps["3xl"]}px;
  }
`;
