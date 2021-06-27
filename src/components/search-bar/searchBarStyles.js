import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: ${props => props.status ? "100%" : "70%"};
  box-sizing: border-box;
  background-color: #E7E7E7;
  border-radius: 30px;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  &:focus {
    background-color: red;
  }
`;

export const SearchGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin:0 auto;
`;


export const SearchIcon = styled.img`
  height: 18px;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 17px;
  line-height: 21px;
  color: #9A9A9D;
  border: none;
  background: transparent;
  outline: none;
`;

export const BtnCancel = styled.span`
  font-size: 17px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
