import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 175px;
  width: 495px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: ${({ theme }) => theme.gaps.xs};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.gaps["4xl"]};
  width: 100%;
  padding-right: ${({ theme }) => theme.gaps["3xl"]};
`;

export const InfoBlock = styled.div``;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.s};
  color: #000000;
`;

export const Text = styled(Title)`
  font-weight: 400;
`;

export const Br = styled.br``;
