import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Cormorant', serif;
    } 
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["8xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["5xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["7xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  }
`;

export const SectionHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["9xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights["6xl"]}px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    line-height: ${({ theme }) => theme.lineHeights["3xl"]}px;
  }
`;

export const SectionButton = styled.button`
  display: block;
  padding: ${({ theme }) => `${theme.gaps.m}px ${theme.gaps["2xl"]}px`};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderSizes.l}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 5px 30px ${({ theme }) => `${theme.colors.primary}b3`};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: none;
  }
`;

export const SectionInput = styled.input`
  width: ${({ theme }) => theme.sizes.xl}px;
  padding: ${({ theme }) => `${theme.gaps.l}px ${theme.gaps["2xl"]}px`};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderSizes.m}px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.black};

  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  }
`;

export const Title = styled.title``;
