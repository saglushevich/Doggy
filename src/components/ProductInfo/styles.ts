import styled from "styled-components";

import search from "@assets/icons/search.svg";

export const Wrapper = styled.div`
    padding-top: 70px;
`;

export const Selection = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #4C4C4B;
`;

export const Block = styled.div`
    margin-top: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SelectionProduct = styled.span`
    color: #E89B93
`;

export const Form = styled.form`
    position: relative;
    width: 330px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 20px;
    padding-left: 30px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    color: #4C4C4B;
`;

export const InputIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    background: url(${search});
`;