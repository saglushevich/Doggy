import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 80px 0 50px;
`;

export const Article = styled.article`
    padding: 0 130px;
    margin-top: 130px;
`;

export const ImageWrapper = styled.div`
    width: 490px;
    height: 480px;
    padding: 8px;
    background: #DFB2A9;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Paragraph = styled.p`
    width: 590px;
    font-family: 'Cormorant';
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #4C4C4B;
    &:nth-last-child(n+2) {
        margin-bottom: 50px;
    }
`;

export const ArticleBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-last-child(n+2) {
        margin-bottom: 160px;
    }
`;

export const Articles = styled.div``;