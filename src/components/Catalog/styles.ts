import styled from "styled-components";

import { SectionButton } from "@styles";

export const Wrapper = styled.section`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding-top: ${({ theme }) => theme.gaps["5xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding-top: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    padding-top: ${({ theme }) => theme.gaps.xl};
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 85px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: ${({ theme }) => theme.gaps["6xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
    margin-top: ${({ theme }) => theme.gaps["3xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    margin-top: ${({ theme }) => theme.gaps.xl};
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["6xl"]}`};
  font-size: 26px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["7xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-top: ${({ theme }) => theme.gaps["2xl"]};
  }
`;
