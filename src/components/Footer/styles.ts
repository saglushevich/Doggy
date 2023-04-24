import { Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.gaps.s} 0`};
  margin-top: ${({ theme }) => theme.gaps["9xl"]};
`;

export const InnerWrapper = styled.div`
  padding: 55px 0 ${({ theme }) => theme.gaps["9xl"]};
  background: #f3ded7;
`;

export const Block = styled.div`
  display: block;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.gaps["2xl"]};
`;

export const FooterLink = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }
`;

export const FooterForm = styled(Form)`
  display: flex;
  align-items: center;
`;

export const FormMessage = styled(Title)`
  margin-top: ${({ theme }) => theme.gaps.s};
  margin-bottom: ${({ theme }) => theme.gaps["8xl"]};
`;

export const Input = styled.input`
  width: 500px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps.xl}`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.gray};
  margin-right: ${({ theme }) => theme.gaps["2xl"]};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderSizes.l};
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps["3xl"]}`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const SocialNetworks = styled.div`
  margin-top: ${({ theme }) => theme.gaps["2xl"]};
`;

export const Social = styled.img`
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["6xl"]};
  }
`;

export const Privacy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1385px;
  padding-top: ${({ theme }) => theme.gaps.m};
  margin: 0 auto;
`;

export const PrivacyBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const PrivacyInfo = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: 27px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]};
  }
`;
