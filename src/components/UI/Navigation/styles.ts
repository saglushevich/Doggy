import Link from "next/link";
import styled from "styled-components";

import { IStyles } from "@types";

export const Wrapper = styled.header`
  display: flex;
  padding: ${({ theme }) => `${theme.gaps.s}px ${theme.gaps["2xl"]}px`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: ${({ theme }) => `${theme.gaps.s}px ${theme.gaps.m}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.gaps["8xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-left: ${({ theme }) => theme.gaps.s}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: none;
  }
`;

export const NavigationLink = styled(Link)<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }

  ${({ active, theme }) =>
    active &&
    `
    &::after {
      position: absolute;
      content: "";
      bottom: -${theme.positions.s}px;
      left: ${theme.positions.xs}px;
      width: ${theme.sizes.m}%;
      height: 6px;
      background: ${theme.colors.primary};
      border-radius: 100px;
    }
  `};

  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]}px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
      margin-right: ${({ theme }) => theme.gaps.m}px;
    }
  }
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: none;
  }
`;

export const Language = styled.div<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]}px;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.black};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }

  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.xl}px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
      margin-right: ${({ theme }) => theme.gaps.s}px;
    }
  }
`;

export const Logotype = styled.img`
  width: 155px;
  height: 80px;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 125px;
    height: 70px;
  }
`;

export const Burger = styled.div<IStyles>`
  display: none;
  position: relative;
  width: ${({ active }) => (active ? 0 : 55)}px;
  height: 4px;
  background: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: -${({ theme }) => theme.positions.s}px;
    right: ${({ theme }) => theme.positions.xs}px;
    width: 55px;
    transition: all 0.5s;
    transform: ${({ active }) =>
      active && "rotate(-45deg) translate(-11px, 3px)"};
    height: ${({ theme }) => theme.sizes.m}%;
    background: ${({ theme }) => theme.colors.black};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -${({ theme }) => theme.positions.s}px;
    right: ${({ theme }) => theme.positions.xs}px;
    width: 55px;
    transition: all 0.5s;
    transform: ${({ active }) =>
      active && "rotate(45deg) translate(-11px, -3px)"};
    height: ${({ theme }) => theme.sizes.m}%;
    background: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
  }
`;
