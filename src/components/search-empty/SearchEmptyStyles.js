import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 103px);
`;

export const Image = styled.img`
    width: 120px;
    height: 120px;
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #0D0D0D;
    margin: 24px 0px;
`;