import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding-top: ${({ theme }) => theme.gaps["6xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: ${({ theme }) => theme.gaps["3xl"]};
  }
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

export const Button = styled(SectionButton)`
  margin: 0 auto;
  width: 300px;
  margin-top: ${({ theme }) => theme.gaps["5xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: auto;
    margin-top: ${({ theme }) => theme.gaps["3xl"]};
  }
`;
