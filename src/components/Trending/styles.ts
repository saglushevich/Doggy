import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 120px 0 50px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 65px;
`;

export const ImageWrapper = styled.div`
    padding: 10px;
    width: 570px;
    height: 575px;
    background: #DFB2A9;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PackageName = styled.div`
    width: 400px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #4C4C4B;
    margin: 0 auto;
`;

export const PackageInfo = styled.div`
    width: 600px;
    padding-top: 85px;
`;

export const PackagePrice = styled(PackageName)`
    color: #000;
`;

export const PackageDescription = styled(PackageName)`
    width: 600px;
    font-size: 22px;
    line-height: 27px;
    margin-top: 40px;
`;

export const PackageButton = styled.button`
    display: block;
    background: #DFB2A9;
    border-radius: 30px;
    padding: 15px 40px;
    font-family: 'Cormorant';
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    border: 1px solid #DFB2A9;
    margin: 0 auto;
    margin-top: 85px;
    cursor: pointer;
`;