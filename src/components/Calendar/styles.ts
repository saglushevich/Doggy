import styled from "styled-components";

import checkmark from "@assets/icons/checkmark.svg";
import { IStyles } from "@types";

export const CalendarWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.xl}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
    margin-bottom: ${({ theme }) => theme.gaps["5xl"]}px;
  }
`;

export const Visit = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
  }
`;

export const TimeSlots = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-bottom: ${({ theme }) => theme.gaps["5xl"]}px;
  }
`;

export const TimeTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps.xl}px;
`;

export const Time = styled.div`
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m}px;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -${({ theme }) => theme.zIndexs.xs};
  opacity: 0;
  & + label {
    display: flex;
    align-items: center;
  }
  & + label::before {
    content: "";
    display: block;
    width: ${({ theme }) => theme.sizes.xs}px;
    height: ${({ theme }) => theme.sizes.xs}px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderSizes.s}px;
    margin-right: ${({ theme }) => theme.gaps.l}px;
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
  cursor: pointer;
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: ${({ theme }) => theme.lineHeights.xs}px;
  letter-spacing: 0.05%;
  color: ${({ theme }) => theme.colors.black};
`;

export const Days = styled.div`
  margin-top: ${({ theme }) => theme.gaps["2xl"]}px;
  display: grid;
  grid-template-columns: repeat(7, ${({ theme }) => theme.gaps["2xl"]}px);
  grid-template-rows: repeat(6, ${({ theme }) => theme.gaps["2xl"]}px);
  column-gap: ${({ theme }) => theme.gaps.l}px;
  row-gap: ${({ theme }) => theme.gaps.s}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    grid-template-columns: repeat(7, ${({ theme }) => theme.gaps.l}px);
    grid-template-rows: repeat(6, ${({ theme }) => theme.gaps.l}px);
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
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme, day, gray }) =>
    day ? theme.colors.primary : gray ? theme.colors.gray : theme.colors.black};
  cursor: pointer;
  ${({ active, gray, theme }) =>
    active &&
    !gray &&
    `
      background: ${theme.colors.primary};
      border-radius: ${theme.borderSizes.s}px;
  `}
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ControlText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  line-height: ${({ theme }) => theme.lineHeights.m}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Arrow = styled.img`
  cursor: pointer;
  &:nth-last-child(1) {
    transform: rotate(180deg);
    margin-left: ${({ theme }) => theme.gaps.l}px;
  }
  &:nth-child(1) {
    margin-right: ${({ theme }) => theme.gaps.l}px;
  }
`;
