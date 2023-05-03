import styled from "styled-components";

export const ErrorText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
