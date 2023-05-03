import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.positions.xs}px;
  left: ${({ theme }) => theme.positions.xs}px;
  z-index: 1050;
  display: block;
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
  background-color: #00000099;
`;

export const ModalContent = styled.div`
  width: ${({ theme }) => theme.sizes["3xl"]}px;
  max-height: 550px;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #00000033;
  margin: ${({ theme }) => `${theme.gaps["5xl"]}px auto`};
  padding: ${({ theme }) => theme.gaps.xl}px;
`;

export const ModalCloseBtn = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.positions.xs}px;
  right: ${({ theme }) => theme.positions.m}px;
  font-size: ${({ theme }) => theme.fontSizes["7xl"]}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  cursor: pointer;
  z-index: 1200;
`;

export const ModalText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  color: ${({ theme }) => theme.colors.gray};
`;

export const ModalHighlighted = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
`;
