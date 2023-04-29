import styled from "styled-components";

import { SectionInput } from "@styles";

export const Wrapper = styled.div`
  width: 510px;
  display: block;
  padding-top: 65px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const PaymentTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.gaps.l};
`;

export const PaymentInput = styled(SectionInput)`
  width: 240px;
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  margin-top: ${({ theme }) => theme.gaps.l};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const PaymentInputWrapper = styled.div`
  display: block;
  width: 240px;
`;

export const PaymentInputs = styled.div`
  width: 510px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
    width: 100%;
  }
`;

export const PaymentInputLarge = styled(PaymentInput)`
  width: 510px;
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const PaymentMethods = styled.div`
  width: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.gaps.l};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div``;

export const Message = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const PaymentMethod = styled.img`
  width: 35px;
  height: 25px;
  object-fit: cover;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.l};
  }
`;
