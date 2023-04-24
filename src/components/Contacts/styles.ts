import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};
`;

export const Text = styled.p`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: center;
  color: #000000;
  margin-top: ${({ theme }) => theme.gaps["8xl"]};
  &:before {
    content: "";
    position: absolute;
    width: 590px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    &:before {
      width: 90%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    &:before {
      width: 90%;
    }
  }
`;

export const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;
