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
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 66px;
  line-height: 80px;
  border-radius: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const SectionHeader = styled.h1`
  font-size: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-size: ${({ theme }) => theme.lineHeights["2xl"]};
  border-radius: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
