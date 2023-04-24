import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 95px;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding-top: ${({ theme }) => theme.gaps["7xl"]};
  }
`;

export const Services = styled.ul`
  position: relative;
  margin-top: ${({ theme }) => theme.gaps["8xl"]};
  padding: 125px 0;
  &:before {
    width: 735px;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }
  &:after {
    width: 735px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps["6xl"]};
    padding: ${({ theme }) => theme.gaps["8xl"]} 0;
    &:before {
      width: 90%;
    }
    &:after {
      width: 90%;
    }
  }
`;
