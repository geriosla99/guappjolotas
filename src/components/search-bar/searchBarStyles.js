import styled, {keyframes} from 'styled-components';

const moveUp = keyframes`
  from {
    transform: translate(10px);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerSearchBar = styled.div`
  background: #E7E7E7;
  border-radius: 30px;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  //animation: ${moveUp} 2s linear infinite;
  &:focus {
    background-color: red;
  }
`
export const SearchIcon = styled.img`
  height: 18px;
  margin-right: 10px;
`

export const SearchInput = styled.input`
  width: 100%;
  font-size: 17px;
  line-height: 21px;
  color: #9A9A9D;
  border: none;
  background: transparent;
  outline: none;
`