import styled from "styled-components";

import { SectionButton, SectionInput } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.gaps["6xl"]};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: 0;
  }
`;

export const Selection = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]} ${theme.gaps.m} 0`};
  width: 750px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  line-height: 48px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Forms = styled.div`
  margin-top: ${({ theme }) => theme.gaps["7xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 750px;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.gaps["4xl"]};

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    display: block;
    margin-bottom: 0;
  }
`;

export const Input = styled(SectionInput)`
  width: 335px;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.div``;

export const Requests = styled(Input)`
  width: 100%;
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps.m}`};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  margin-top: ${({ theme }) => theme.gaps["7xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: 0;
  }
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

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const Button = styled(SectionButton)`
  padding: ${({ theme }) => `${theme.gaps.xs} ${theme.gaps["8xl"]}`};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
`;

export const Message = styled.div`
  width: 335px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`;
