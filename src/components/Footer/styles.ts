import styled from "styled-components";

export const Wrapper = styled.footer`
    background: #DFB2A9;
    padding: 10px 0;
    margin-top: 80px;
`;

export const InnerWrapper = styled.div`
    padding: 55px 0 80px;
    background: #F3DED7;
`;

export const Block = styled.div`
    display: block;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #4C4C4B;
    margin-bottom: 30px;
`;

export const FooterLink = styled.a`
    display: block;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #4C4C4B;
    cursor: pointer;
    &:nth-last-child(n+2) {
        margin-bottom: 15px;
    }
`;

export const FooterForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 70px;
`;

export const Input = styled.input`
    width: 500px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    padding: 20px 25px;
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 14px;
    color: #959FA8;
    margin-right: 30px;
`;

export const Button = styled.button`
    background: #E89B93;
    border-radius: 30px;
    padding: 10px 35px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    border: 1px solid #E89B93;
    cursor: pointer;
`;

export const SocialNetworks = styled.div`
    margin-top: 30px;
`;

export const Social = styled.img`
    cursor: pointer;
    &:nth-last-child(n+2) {
        margin-right: 50px;
    }
`;

export const Privacy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1385px;
    padding-top: 15px;
    margin: 0 auto;
`;

export const PrivacyBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const PrivacyInfo = styled.div`
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #4C4C4B;
    cursor: pointer;
    &:nth-last-child(n+2) {
        margin-right: 30px;
    }
`;