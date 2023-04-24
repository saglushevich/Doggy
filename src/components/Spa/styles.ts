import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 95px;
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
`;
