import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["10xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    padding-top: ${({ theme }) => theme.gaps["7xl"]}px;
  }
`;

export const Services = styled.ul`
  position: relative;
  margin-top: ${({ theme }) => theme.gaps["8xl"]}px;
  padding: ${({ theme }) => theme.gaps["12xl"]}px 0;
  &:before {
    width: ${({ theme }) => theme.sizes["7xl"]}px;
    content: "";
    position: absolute;
    top: ${({ theme }) => theme.positions.xs}px;
    left: ${({ theme }) => theme.positions.l}%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }
  &:after {
    width: ${({ theme }) => theme.sizes["7xl"]}px;
    content: "";
    position: absolute;
    bottom: ${({ theme }) => theme.positions.xs}px;
    left: ${({ theme }) => theme.positions.l}%;
    transform: translateX(-50%);
    border: 1px solid #000000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletSmall}px) {
    margin-top: ${({ theme }) => theme.gaps["6xl"]}px;
    padding: ${({ theme }) => theme.gaps["8xl"]}px 0;
    &:before {
      width: ${({ theme }) => theme.sizes.s}%;
    }
    &:after {
      width: ${({ theme }) => theme.sizes.s}%;
    }
  }
`;
