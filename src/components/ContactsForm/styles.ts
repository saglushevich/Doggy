import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.div`
  padding: 100px 100px 120px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    padding: 100px 50px 120px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => `${theme.gaps["6xl"]} 0 0`};
  }
`;

export const InputWrapper = styled.div`
  display: block;
`;

export const Input = styled(SectionInput)`
  width: 605px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.gaps["3xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-bottom: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: ${({ theme }) => theme.gaps.l};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 315px;
  resize: none;
  padding: ${({ theme }) => theme.gaps["2xl"]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 200px;
  }
`;

export const FormMessage = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: #b78e80;
  text-align: center;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps["9xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    &:nth-last-child(n + 2) {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps["9xl"]}`};
  margin: 0 auto;
  margin-top: 65px;
  margin-bottom: ${({ theme }) => theme.gaps.xl};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.gaps["3xl"]};
  }
`;
