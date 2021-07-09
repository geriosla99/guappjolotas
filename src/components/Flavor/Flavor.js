import styled from 'styled-components'

export const FlavorContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3,1fr);
    row-gap: 48px;
    column-gap: 45px;
    max-width: 700px;
    margin: 0 auto;
    @media (min-width: 640px){
      column-gap: 60px;
  }
`;

export const OpacityFlavor = styled.img`
    opacity: ${props => props.selected ? '1':'0.3'};
`;

export const FlavorTitle = styled.h2`
    font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0D0D0D;
  margin: 40px 0 24px;
  @media (min-width: 640px){
    text-align: center
  }
`;