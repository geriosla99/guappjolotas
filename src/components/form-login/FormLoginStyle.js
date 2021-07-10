import styled from "styled-components";

export const FormContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: calc(100vw - 40px);
   height: calc(100vh - 40px);
`;

export const InputGroup = styled.div`
   margin-bottom: 20px;
   width: 100%;
`

export const Form = styled.form`
   width: 70vw;
   max-width: 400px;
   padding: 30px;
   margin: 0 auto;
   background-color: #FFFFFF;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const Input = styled.input`
   background-color : #F2F2F2;
   outline: none;
   padding: 16px;
   font-size: 17px;
   line-height: 21px;
   color: #0D0D0D;
   border-radius: 10px;
   border: 0px;
   box-sizing: border-box;
   width: 100%;
`
export const Label = styled.label`
   font-size: 17px;
   line-height: 21px;
   color: #0D0D0D;
   display : block;
   margin-bottom: 10px;
`
export const Submit = styled.button`
   background: #FA4A0C;
   padding: 24px;
   border-radius: 40px;
   text-align:center;
   width: 100%;
   border: none;
   color: #FFF;
   cursor: pointer;
   font-size: 17px;
   font-weight: 600;
`

export const ButtonSecondary = styled.span`
   cursor: pointer;
   padding: 0px 24px;
   font-style: normal;
   font-weight: 600;
   font-size: 17px;
   line-height: 21px;
   text-align: center;
   color: #FA4A0C;
   margin-top: 16px;
   display: block;
`

export const LogoImg = styled.img`
   margin-bottom:25px;
`;
