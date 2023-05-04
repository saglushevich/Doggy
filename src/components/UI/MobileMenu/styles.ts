import Link from "next/link";
import styled from "styled-components";

import { IStyles } from "@types";

export const Wrapper = styled.div<IStyles>`
  display: none;
  width: 100%;
  height: 100vh;
  background: transparent;
  position: absolute;
  top: ${({ theme }) => theme.positions.xs}px;
  left: ${({ theme }) => theme.positions.xs}px;
  transition: all 0.5s;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
    z-index: ${({ active }) => (active ? "1000" : "-1000")};
    transform: ${({ active }) =>
      active ? `translateX(0%)` : `translateX(-150%)`};
  }
`;

export const Menu = styled.nav<IStyles>`
  transform: ${({ active }) =>
    active ? `translateX(0%)` : `translateX(-150%)`};
  width: 70%;
  height: ${({ theme }) => theme.sizes.m}vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.gaps["3xl"]}px ${theme.gaps.m}px`};
  transition: all 0.5s;
  z-index: 500;
`;

export const MenuItem = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const Languages = styled.div`
  margin-top: ${({ theme }) => theme.gaps["8xl"]}px;
`;

export const Language = styled.div<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.l}px;
  }
`;
