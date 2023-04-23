import styled from "styled-components";

export const Wrapper = styled.li`
    max-width: 1050px;
    margin: 0 auto;
    &:nth-last-child(n+2) {
        margin-bottom: 90px;
    }
`;

export const Title = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    color: #4C4C4B;
`;

export const Price = styled.span`
    display: block;
`;

export const Description = styled(Title)`
    font-weight: 400;
    margin-top: 30px;
`;