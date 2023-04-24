import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.gaps["6xl"]};
`;

export const Selection = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]} ${theme.gaps.m} 0`};
  width: 750px;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  line-height: 48px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.gaps["7xl"]};
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]};
`;

export const Input = styled.input`
  width: 335px;
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps["2xl"]}`};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.black};
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["7xl"]};
  }
`;

export const Requests = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps.m}`};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  color: ${({ theme }) => theme.colors.black};
  resize: none;
  margin-top: ${({ theme }) => theme.gaps["7xl"]};
`;

export const Cancelling = styled.p`
  display: block;
  width: 485px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 19px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps.l};
`;

export const Button = styled.button`
  display: block;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderSizes.l};
  padding: ${({ theme }) => `${theme.gaps.xs} ${theme.gaps["8xl"]}`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
`;
