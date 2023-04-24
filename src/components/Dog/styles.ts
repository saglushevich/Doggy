import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 165px;
`;

export const ImageWrapper = styled.div`
  padding: ${({ theme }) => `${theme.gaps["8xl"]} 0 ${theme.gaps["6xl"]}`};
  background: #f3ded7;
`;

export const Image = styled.img`
  display: block;
  width: 730px;
  height: 480px;
  object-fit: cover;
  margin: 0 auto;
`;

export const Breed = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  margin-top: ${({ theme }) => theme.gaps["5xl"]};
  text-align: center;
`;

export const Characteristics = styled.ul`
  margin-top: 110px;
  padding-left: ${({ theme }) => theme.gaps["6xl"]};
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
`;
