import styled from "styled-components";

export const Wrapper = styled.div`
  width: 435px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 235px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["4xl"]};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 445px;
  padding: 5px;
  background: ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 325px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    height: 360px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-top: 55px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps.l};
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.s};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: ${({ theme }) => theme.lineHeights.xs};
  }
`;

export const Category = styled(Title)`
  margin-top: 5px;
`;

export const Price = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.s};
  margin-top: ${({ theme }) => theme.gaps.m};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    line-height: ${({ theme }) => theme.lineHeights.xs};
  }
`;
