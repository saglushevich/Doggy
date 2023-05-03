import styled from "styled-components";

import search from "@assets/icons/search.svg";
import { SectionInput } from "@styles";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const Selection = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]}px;
  line-height: ${({ theme }) => theme.lineHeights.m}px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
    line-height: ${({ theme }) => theme.lineHeights.s}px;
  }
`;

export const Block = styled.div`
  margin-top: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: ${({ theme }) => theme.gaps["8xl"]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
    margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  }
`;

export const SelectionProduct = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    display: block;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 330px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const Input = styled(SectionInput)`
  width: ${({ theme }) => theme.sizes.m}%;
  padding: ${({ theme }) => theme.gaps.l}px;
  padding-left: ${({ theme }) => theme.gaps["2xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps.m}px;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.positions.s}px;
  right: 15px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background: url(${search});
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    top: 25px;
  }
`;
