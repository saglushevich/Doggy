import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 70px;
`;

export const Text = styled.p`
    position: relative;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    margin-top: 70px;
    &:before {
        content: "";
        position: absolute;
        width: 590px;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid #000000;
    }
`;

export const EmailLink = styled.a`
    color: #E89B93;
    text-decoration: underline;
`;