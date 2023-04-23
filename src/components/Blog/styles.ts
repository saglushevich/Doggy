import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 65px 0 120px;
`;

export const Article = styled.article`
    padding: 35px 25px 0;
`;

export const ArticleTitle = styled.h3`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #4C4C4B;
    margin-bottom: 40px;
`;

export const ImageWrapper = styled.div`
    width: 630px;
    height: 560px;
    padding: 8px;
    background: #DFB2A9;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Paragraph = styled.p`
    width: 720px;
    padding: 0 100px;
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    color: #4C4C4B;
`;

export const ParagraphEnd = styled.span`
    display: block;
    margin-top: 70px;
`;

export const ArticleBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-last-child(n+2) {
        margin-bottom: 80px;
    }
`;