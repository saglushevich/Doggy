import Link from "next/link";
import styled from "styled-components";

import { IStyles } from "@interfaces";

export const Wrapper = styled.header`
  display: flex;
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps["2xl"]}`};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.m}`};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.gaps["8xl"]};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.gaps.s};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: none;
  }
`;

export const NavigationLink = styled(Link)<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  font-weight: 700;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  ${({ active }) =>
    active &&
    `
    &::after {
      position: absolute;
      content: "";
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 6px;
      background: #e89b93;
      border-radius: 100px;
    }
  `};

  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]};
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin-right: ${({ theme }) => theme.gaps.m};
    }
  }
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: none;
  }
`;

export const Language = styled.div<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.black};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.xl};
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin-right: ${({ theme }) => theme.gaps.s};
    }
  }
`;

export const Logotype = styled.img`
  width: 155px;
  height: 80px;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
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
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    right: 0px;
    width: 55px;
    transition: all 0.5s;
    transform: ${({ active }) =>
      active && "rotate(-45deg) translate(-11px, 3px)"};
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 0px;
    width: 55px;
    transition: all 0.5s;
    transform: ${({ active }) =>
      active && "rotate(45deg) translate(-11px, -3px)"};
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
  }
`;
