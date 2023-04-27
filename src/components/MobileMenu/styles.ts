import Link from "next/link";
import styled from "styled-components";

import { IStyles } from "@interfaces";

export const Menu = styled.nav<IStyles>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ active }) =>
    active ? `translateX(0%)` : `translateX(-150%)`};
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.gaps["3xl"]} ${theme.gaps.m}`};
  transition: all 0.5s;
  z-index: 500;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
  }
`;

export const MenuItem = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Languages = styled.div`
  margin-top: ${({ theme }) => theme.gaps["8xl"]};
`;

export const Language = styled.div<IStyles>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.l};
  }
`;
