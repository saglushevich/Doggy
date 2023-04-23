import styled from "styled-components";

import checkmark from "@assets/icons/checkmark.svg";

export const CalendarWrapper = styled.div`
    width: 320px;
`;

export const Visit = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TimeSlots = styled.div``;

export const TimeTitle = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #4C4C4B;
    margin-bottom: 25px;
`;  

export const Time = styled.div`
    &:nth-last-child(n+2) {
        margin-bottom: 15px;
    }
`;

export const Checkbox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    &+label {
        display: flex;
        align-items: center;
    }
    &+label::before{
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border: 1px solid #4C4C4B;
        border-radius: 4px;
        margin-right: 20px;
    }
    &:checked+label::before {
        border-color: #E89B93;
        background-color: #E89B93;
        background-image: url(${checkmark});
        background-repeat: no-repeat;
        background-position: center center;
    }
`;

export const Label = styled.label`
    display: block;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #4C4C4B;
`;

export const Days = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(7, 30px);
    grid-template-rows: repeat(6, 30px);
    column-gap: 20px;
    row-gap: 10px;
`;

export const CalendarBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 13px;
    color: #4C4C4B;
    cursor: pointer;
`;

export const Control = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ControlText = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #2B2B2B;

`;

export const Arrow = styled.img`
    cursor: pointer;
    &:nth-last-child(1) {
        transform: rotate(180deg);
        margin-left: 20px;
    }
    &:nth-child(1) {
        margin-right: 20px;
    }
`;