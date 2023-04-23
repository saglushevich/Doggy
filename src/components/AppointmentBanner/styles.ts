import styled from "styled-components";

import appointmentDog from "@assets/images/appointmentDog.webp";

export const Wrapper = styled.div`
    width: 100%;
    height: 835px;
    background: url(${appointmentDog}) center center/ cover no-repeat;
    padding-top: 95px;
`;

export const Title = styled.h1`
    width: 480px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 70px;
    line-height: 85px;
    color: #FFFFFF;
    margin-left: 55px;
`;