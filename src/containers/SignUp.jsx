import React, {useState} from 'react'
import { createGlobalStyle } from 'styled-components';
import FormLogin from '../components/FormLogin';
import Pay from '../components/Pay';
import { ButtonBack } from '../components/CartEmpty/CartEmpty';
import { useHistory } from "react-router-dom";


const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background: #F2F2F2;
    }
`;
const SignUp = (props) => {
   const history = useHistory();
   const handleClick = (e) => {
      history.goBack();
   }

   const session = sessionStorage.getItem('token')
   let existSession = session ? true : false;
   const [isLogged, setIsLogged] = useState(existSession)

   console.log(isLogged)
   console.log(props.location.actionPay)

   return (
      <>
         <GlobalStyle />
         <ButtonBack src="https://i.imgur.com/usmRDrf.png" alt="" onClick={handleClick} />
         {
            !isLogged ? <FormLogin setIsLogged={setIsLogged} /> 
            : props.location.actionPay ? <Pay /> : <h1>vamo a mi perfil</h1>
         }
         
      </>
   )
}

export default SignUp
