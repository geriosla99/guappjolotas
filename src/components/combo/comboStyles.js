import styled from 'styled-components';

export const ComboMainTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0D0D0D;
  margin: 40px 0 8px;
  @media (min-width: 640px){
    text-align: center
  }
`;
export const ComboMainText = styled.p`
  font-size: 15px;
  color: #0D0D0D;
  opacity: 0.5;
  margin: 0 0 24px;
  @media (min-width: 640px){
    text-align: center
  }
`;

export const ComboFoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 8px;
  max-width: 600px;
  margin: 0 auto 140px;
`;

export const ComboItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  cursor:pointer;
`;

export const ComboItemTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #0D0D0D;
  margin:0;
`;

export const ComboItemPrice = styled.p`
  color: #FA4A0C;
  margin: 4px 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImgInput = styled.img`
  width: 18px;
  height: 18px;
`