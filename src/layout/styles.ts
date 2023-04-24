import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1490px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 735px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 405px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    padding: 0 5px;
  }
`;
