import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps["2xl"]}`};
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 155px;
`;

export const NavigationLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  font-weight: 700;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &:hover {
    &::after {
      position: absolute;
      content: "";
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 6px;
      background: #e89b93;
      border-radius: 100px;
    }
  }
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps["2xl"]};
  }
`;

export const Logotype = styled.img`
  width: 155px;
  height: 80px;
  object-fit: cover;
`;
