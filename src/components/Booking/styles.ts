import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`;

export const Selection = styled.div`
    padding: 70px 15px 0;
    width: 750px;
`;

export const Title = styled.div`
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #4C4C4B;
`;

export const Form = styled.form`
    margin-top: 60px;
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

export const Input = styled.input`
    width: 335px;
    padding: 20px 30px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    color: #4C4C4B;
    &:nth-last-child(n+2) {
        margin-right: 60px;
    }
`;

export const Requests = styled.textarea`
    width: 100%;
    padding: 20px 15px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4C4C4B;
    resize: none;
    margin-top: 60px;
`;


export const Cancelling = styled.p`
    display: block;
    width: 485px;
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4C4C4B;
    margin: 0 auto;
    margin-top: 20px;
`;

export const Button = styled.button`
    display: block;
    background: #E89B93;
    border-radius: 30px;
    padding: 8px 80px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid #E89B93;
    margin: 0 auto;
    margin-top: 35px;
`;