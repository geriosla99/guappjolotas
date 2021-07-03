import styled from 'styled-components';

export const ComboFoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 8px;
`

export const ComboItemContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  cursor:pointer;
`

export const ComboItemTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #0D0D0D;
  margin:0;
`

export const ComboItemPrice = styled.p`
  color: #FA4A0C;
  margin: 4px 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`