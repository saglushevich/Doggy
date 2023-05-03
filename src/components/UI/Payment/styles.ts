import styled from "styled-components";

import { SectionInput } from "@styles";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.sizes["5xl"]}px;
  display: block;
  padding-top: 65px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const PaymentTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.gaps.l}px;
`;

export const PaymentInput = styled(SectionInput)`
  width: ${({ theme }) => theme.sizes.l}px;
  padding: ${({ theme }) => `${theme.gaps.m}px ${theme.gaps.l}px`};
  margin-top: ${({ theme }) => theme.gaps.l}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const PaymentInputWrapper = styled.div`
  display: block;
  width: ${({ theme }) => theme.sizes.l}px;
`;

export const PaymentInputs = styled.div`
  width: ${({ theme }) => theme.sizes["5xl"]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    display: block;
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const PaymentInputLarge = styled(PaymentInput)`
  width: ${({ theme }) => theme.sizes["5xl"]}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const PaymentMethods = styled.div`
  width: ${({ theme }) => theme.sizes["5xl"]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.gaps.l}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    width: ${({ theme }) => theme.sizes.m}%;
  }
`;

export const InputWrapper = styled.div``;

export const Message = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PaymentMethod = styled.img`
  width: 35px;
  height: ${({ theme }) => theme.sizes.xs}px;
  object-fit: cover;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.l}px;
  }
`;
