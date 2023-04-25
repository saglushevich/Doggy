import styled from "styled-components";

export const ErrorText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
