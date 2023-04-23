import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PaymentTitle = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #4C4C4B;
    text-align: center;
    margin-bottom: 0;
`;


export const PaymentInput = styled.input`
    width: 240px;
    padding: 15px 20px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    color: #4C4C4B;
    margin-top: 20px;
`;

export const PaymentInputs = styled.div`
    width: 510px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PaymentInputLarge = styled(PaymentInput)`
    width: 510px;
`;

export const PaymentMethods = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const PaymentMethod = styled.img`
    width: 35px;
    height: 25px;
    object-fit: cover;
    cursor: pointer;
    &:nth-last-child(n+2) {
        margin-right: 20px;
    }
`;