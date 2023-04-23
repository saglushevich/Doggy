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
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 66px;
    line-height: 80px;
    color: #4C4C4B;
    text-align: center;
`;

export const SectionHeader = styled.h1`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 70px;
    line-height: 85px;
    color: #4C4C4B;
    text-align: center;
`;