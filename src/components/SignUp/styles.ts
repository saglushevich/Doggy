import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background: #DFB2A9;
    width: 970px;
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    padding: 90px 40px 100px 80px;
`;

export const Content = styled.div`
    width: 270px;
`;

export const SignTitle = styled.div`
    max-width: 200px;
    font-family: 'Cinzel Decorative';
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #4C4C4B;
`;

export const SignDiscount = styled.div`
    max-width: 250px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #4C4C4B;
    margin-top: 20px;
`;


export const SignInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    padding: 13px;
    margin-top: 25px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #959FA8;
    width: 100%;
`;

export const SignButton = styled.button`
    display: block;
    padding: 7px 35px;
    background: #E89B93;
    border-radius: 30px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid #E89B93;
    margin: 0 auto;
    margin-top: 35px;
`;

export const SignText = styled.p`
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #4C4C4B;
    width: 230px;
    margin: 0 auto;
    margin-top: 35px;
`;

export const ImageWrapper = styled.div`
    background: #DFB2A9;
    padding: 10px;
    width: 480px;
    height: 450px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;