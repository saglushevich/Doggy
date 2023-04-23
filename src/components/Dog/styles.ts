import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 165px;
`;

export const ImageWrapper = styled.div`
    padding: 70px 0 50px;
    background: #F3DED7;
`;

export const Image = styled.img`
    display: block;
    width: 730px;
    height: 480px;
    object-fit: cover;
    margin: 0 auto;
`;

export const Breed = styled.h2`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #000000;
    margin-top: 45px;
    text-align: center;
`;

export const Characteristics = styled.ul`
    margin-top: 110px;
    padding-left: 50px;
`;

export const Characteristic = styled.li`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #4C4C4B;
    &:nth-child(1) {
        color: #000000;
    }
    &:nth-last-child(n+2) {
        margin-bottom: 20px;
    }
`;