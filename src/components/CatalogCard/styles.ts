import styled from "styled-components";

export const Wrapper = styled.div`
    width: 435px;
    cursor: pointer;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 445px;
    padding: 5px;
    background: #E89B93;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    margin-top: 55px;
`;

export const Title = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #4C4C4B;
`;

export const Category = styled(Title)`
    margin-top: 5px;
`;

export const Price = styled(Title)`
    font-size: 30px;
    line-height: 36px;
    margin-top: 15px;
`;