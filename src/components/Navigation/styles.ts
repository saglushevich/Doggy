import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    padding: 10px 30px;
`;

export const NavigationLinks = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 155px;
`;

export const NavigationLink = styled.a`
    font-family: 'Cormorant';
    position: relative;
    font-weight: 700;
    font-size: 26px;
    color: #4C4C4B;
    cursor: pointer;
    &:hover {
        &::after {
            position: absolute;
            content: "";
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 6px;
            background: #E89B93;
            border-radius: 100px;
        }
    }
    &:nth-last-child(n+2){
        margin-right: 30px;
    }
`;

export const Logotype = styled.img`
    width: 155px;
    height: 80px;
    object-fit: cover;
`;