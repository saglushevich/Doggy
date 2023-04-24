import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps.s} 0`};
  background: #f3ded7;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
