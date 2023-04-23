import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 175px;
    width: 495px;
`;

export const MapWrapper = styled.div`
    width: 100%;
    height: 500px;
    padding: 8px;
    background: #DFB2A9;
`;

export const Map = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 100%;
    padding-right: 35px;
`;

export const InfoBlock = styled.div``;

export const Title = styled.div`
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`;

export const Text = styled(Title)`
    font-weight: 400;
`;

export const Br = styled.br``;