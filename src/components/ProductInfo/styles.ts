import styled from "styled-components";

import search from "@assets/icons/search.svg";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};
`;

export const Selection = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.m};
  color: ${({ theme }) => theme.colors.black};
`;

export const Block = styled.div`
  margin-top: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectionProduct = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.form`
  position: relative;
  width: 330px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.gaps.l};
  padding-left: ${({ theme }) => theme.gaps["2xl"]};
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.black};
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
