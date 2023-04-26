import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #00000099;
`;

export const ModalContent = styled.div`
  width: 450px;
  max-height: 550px;
  overflow: scroll;
  background-color: #fff;
  border: 1px solid #00000033;
  margin: ${({ theme }) => `${theme.gaps["5xl"]} auto`};
  padding: ${({ theme }) => theme.gaps.xl};
`;

export const ModalCloseBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 40px;
  font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  font-weight: 700;
  cursor: pointer;
  z-index: 1200;
`;

export const ModalText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ModalHighlighted = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalRequest = styled(ModalHighlighted)`
  display: block;
`;
