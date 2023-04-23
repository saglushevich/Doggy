import styled from "styled-components";

import dog from "@assets/images/promo_dog.webp";
 
export const Wrapper = styled.div`
    overflow: hidden;
    background: radial-gradient(102.62% 34.54% at 100% 51.91%, #EEC8BD 0%, #EFC7BD 48.44%, rgba(241, 204, 195, 0) 100%), radial-gradient(122.16% 14.5% at 100% 92.37%, #F2CDC4 0%, #EEC9BF 57.81%, rgba(241, 204, 195, 0) 100%), radial-gradient(63.16% 40.2% at 75.8% 0%, #ECC7BE 0%, #ECC7BE 57.81%, rgba(241, 204, 195, 0) 100%), radial-gradient(200.85% 69.69% at 50% 61.2%, #EDC7BE 0.99%, #EDC8BF 50.91%, #F1CDC1 100%);
`;

export const Image = styled.div`
    padding-top: 130px;
    background: url(${dog}) 170px -80px/cover no-repeat;   
`;

export const Content = styled.div`
    padding-left: 60px;
    width: 580px;
`;

export const Title = styled.h1`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 70px;
    line-height: 85px;
    color: #4C4C4B;
`;

export const Subtitle = styled.h2`
    max-width: 430px;
    font-family: 'Cormorant';
    text-align: center;
    font-weight: 700;
    font-size: 63px;
    line-height: 76px;
    color: #4C4C4B;
    margin-top: 45px;
`;

export const Button = styled.button`
    background: #E89B93;
    border-radius: 30px;
    padding: 15px 30px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid #E89B93;
    margin: 65px 0 140px 100px;
`;