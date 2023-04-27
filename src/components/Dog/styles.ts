import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 165px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 115px;
  }
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]} 0 ${theme.gaps["6xl"]}`};
  background: #f3ded7;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: 5px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 730px;
  height: 480px;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    height: 320px;
  }
`;

export const InfoText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  margin-top: ${({ theme }) => theme.gaps["5xl"]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    margin-top: ${({ theme }) => theme.gaps["2xl"]};
  }
`;

export const Characteristics = styled.ul`
  margin-top: 110px;
  padding-left: ${({ theme }) => theme.gaps["6xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["9xl"]};
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
    padding-left: 0;
  }
`;

export const Characteristic = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  line-height: 48px;
  color: ${({ theme }) => theme.colors.black};
  &:nth-child(1) {
    color: #000000;
  }
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.l};
  }
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps.s};
    }
  }
`;
