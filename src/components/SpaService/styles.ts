import styled from "styled-components";

export const Wrapper = styled.li`
  max-width: 1050px;
  margin: 0 auto;
  &:nth-last-child(n + 2) {
    margin-bottom: 90px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    &:nth-last-child(n + 2) {
      margin-bottom: ${({ theme }) => theme.gaps["4xl"]};
    }
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: 42px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const Price = styled.span`
  display: block;
`;

export const Description = styled(Title)`
  font-weight: 400;
  margin-top: ${({ theme }) => theme.gaps["2xl"]};
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps.l};
  }
`;
