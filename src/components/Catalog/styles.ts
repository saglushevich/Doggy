import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 85px;
`;

export const Button = styled.button`
  display: block;
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["6xl"]}`};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderSizes.l};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["7xl"]};
`;
