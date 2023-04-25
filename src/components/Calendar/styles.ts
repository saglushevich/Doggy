/* eslint-disable no-nested-ternary */
import styled from "styled-components";

import checkmark from "@assets/icons/checkmark.svg";
import { IStyles } from "@interfaces";

export const CalendarWrapper = styled.div`
  width: 320px;
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.gaps["5xl"]};
  }
`;

export const Visit = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
  }
`;

export const TimeSlots = styled.div`
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-bottom: ${({ theme }) => theme.gaps["5xl"]};
  }
`;

export const TimeTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps.xl};
`;

export const Time = styled.div`
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: flex;
    align-items: center;
  }
  & + label::before {
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderSizes.s};
    margin-right: ${({ theme }) => theme.gaps.l};
  }
  &:checked + label::before {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Days = styled.div`
  margin-top: ${({ theme }) => theme.gaps["2xl"]};
  display: grid;
  grid-template-columns: repeat(7, 30px);
  grid-template-rows: repeat(6, 30px);
  column-gap: ${({ theme }) => theme.gaps.l};
  row-gap: ${({ theme }) => theme.gaps.s};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    justify-content: center;
  }
`;

export const CalendarBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Day = styled.div<IStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme, day, gray }) =>
    day ? theme.colors.primary : gray ? theme.colors.gray : theme.colors.black};
  cursor: pointer;
  ${({ active, gray }) =>
    active &&
    !gray &&
    `
      background: #e89b93;
      border-radius: 4px;
  `}
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ControlText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 22px;
  color: #2b2b2b;
`;

export const Arrow = styled.img`
  cursor: pointer;
  &:nth-last-child(1) {
    transform: rotate(180deg);
    margin-left: ${({ theme }) => theme.gaps.l};
  }
  &:nth-child(1) {
    margin-right: ${({ theme }) => theme.gaps.l};
  }
`;
