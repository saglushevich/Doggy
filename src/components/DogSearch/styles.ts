import styled from "styled-components";

import search from "@assets/icons/search.svg";
import { SectionInput } from "@styles";

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps["8xl"]};
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const Selection = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.m};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: ${({ theme }) => theme.lineHeights.s};
  }
`;

export const Block = styled.div`
  margin-top: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: ${({ theme }) => theme.gaps["8xl"]};
  }

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: block;
    margin-top: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const SelectionProduct = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    display: block;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 330px;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
  }
`;

export const Input = styled(SectionInput)`
  width: 100%;
  padding: ${({ theme }) => theme.gaps.l};
  padding-left: ${({ theme }) => theme.gaps["2xl"]};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    margin-top: ${({ theme }) => theme.gaps.m};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background: url(${search});
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    top: 25px;
  }
`;
