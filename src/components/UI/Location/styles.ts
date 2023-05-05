import styled from "styled-components";

export const Wrapper = styled.div`
  width: 495px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-top: ${({ theme }) => theme.gaps["10xl"]}px;
    width: ${({ theme }) => theme.sizes.m}%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: ${({ theme }) => theme.gaps.xxs};
  }
`;

export const MapWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes["5xl"]}px;
  padding: ${({ theme }) => theme.gaps.xs}px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: ${({ theme }) => theme.sizes["3xl"]}px;
  }
`;

export const Map = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.m}%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.gaps["4xl"]}px;
  width: ${({ theme }) => theme.sizes.m}%;
  padding-right: ${({ theme }) => theme.gaps["3xl"]}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: block;
  }
`;

export const InfoBlock = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["2xl"]}px;
    }
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  line-height: ${({ theme }) => theme.lineHeights.m}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Operation = styled(Title)`
  font-weight: ${({ theme }) => theme.fontWeights.s};
`;

export const OperationWrapper = styled.div``;

export const Br = styled.br``;
