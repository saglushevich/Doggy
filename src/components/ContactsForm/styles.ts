import styled from "styled-components";

export const Form = styled.form`
    padding: 100px 100px 120px;
`;

export const Input = styled.input`
    width: 605px;
    padding: 20px 30px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    color: #4C4C4B;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 315px;
    resize: none;
    padding: 30px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4C4C4B;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
    &:nth-last-child(n+2) {
        margin-bottom: 80px;
    }
`;

export const Button = styled.button`
    display: block;
    padding: 10px 80px;
    background: #E89B93;
    border-radius: 30px;
    border: 1px solid #E89B93;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 65px;
`;
    