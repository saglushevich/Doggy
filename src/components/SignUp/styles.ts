import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.gaps.s};
  background: #dfb2a9;
  width: 970px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    position: static;
    transform: translateX(0);
    width: 100%;
    margin-top: ${({ theme }) => theme.gaps["2xl"]};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 90px 40px 100px 80px;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    padding: ${({ theme }) => `${theme.gaps["8xl"]} ${theme.gaps["4xl"]}`};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    padding: ${({ theme }) => theme.gaps.m};
  }
`;

export const Content = styled.div`
  width: 270px;
`;

export const SignTitle = styled.div`
  max-width: 200px;
  font-family: "Cinzel Decorative";
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.l};
  color: ${({ theme }) => theme.colors.black};
`;

export const SignDiscount = styled.div`
  max-width: 250px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: 27px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.gaps.l};
`;

export const SignInput = styled.input`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderSizes.m};
  padding: 13px;
  margin-top: ${({ theme }) => theme.gaps.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;

export const SignButton = styled.button`
  display: block;
  padding: ${({ theme }) => `${theme.gaps.xs} ${theme.gaps["3xl"]}`};
  background: #e89b93;
  border-radius: ${({ theme }) => theme.borderSizes.l};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: 1px solid #e89b93;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

export const FormMessage = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #b78e80;
  text-align: center;
  margin-top: ${({ theme }) => theme.gaps.m};
`;

export const SignText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 230px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
`;

export const ImageWrapper = styled.div`
  background: #dfb2a9;
  padding: ${({ theme }) => theme.gaps.s};
  width: 480px;
  height: 450px;

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
