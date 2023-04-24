import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PaymentTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 0;
`;

export const PaymentInput = styled.input`
  width: 240px;
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps.l};
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
  margin-top: ${({ theme }) => theme.gaps.l};
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
