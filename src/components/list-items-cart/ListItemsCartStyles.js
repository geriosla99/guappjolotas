import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
`;

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin: 16px 0px;
    height: 40px;
`;

export const Text = styled.span`
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #0D0D0D;
`;

export const PriceTotal = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #FA4A0C;
`;

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0px;
    cursor: pointer;
`;

export const GroupItem = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageItem = styled.img`
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 16px;
`;

export const DescriptionItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleItem = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #0D0D0D;
`;

export const QuantityItem = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FA4A0C;
`;

export const SubtotalItem = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FA4A0C;
`;