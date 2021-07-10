import React, { useState } from 'react'
import { Form, Input, Label, InputGroup, Submit, ButtonSecondary } from './form-login/FormLoginStyle'

const FormLogin = ({setIsLogged}) => {

   const users = JSON.parse(localStorage.getItem('users')) || []

   const [dataForm, setDataForm] = useState({ email: '', password: '', name: '' })
   const [isLogin, setIsLogin] = useState(true)

   const handleSubmit = (e) => {
      e.preventDefault()
      const user = users.find((user) => user.email === dataForm.email && atob(user.password) === dataForm.password)
      if (user) {
         sessionStorage.setItem('token', user.name)
         setIsLogged(true)
      } else {
         alert('usuario o contraseña incorrectas')
      }
   }

   const handleChange = ({ target }) => {
      setDataForm({
         ...dataForm,
         [target.name]: target.value
      })
   }

   const handleRegister = () => {
      setIsLogin(!isLogin);
   }

   const handleSubmitRegister = (e) => {
      e.preventDefault();
      //encriptar contraseña btoa
      dataForm.password = btoa(dataForm.password);
      users.push(dataForm);
      localStorage.setItem('users', JSON.stringify(users));
      setDataForm({ email: '', password: '', name: '' });
      setIsLogged(true);
   }

   return (
      <div>
         {
            isLogin ?
               <Form onSubmit={handleSubmit}>
                  <InputGroup>
                     <Label
                        htmlFor='email'
                     >Correo</Label>
                     <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Escriba su correo'
                        required
                        value={dataForm.email}
                        onChange={handleChange}
                     />
                  </InputGroup>
                  <InputGroup>
                     <Label
                        htmlFor='password'
                     >Contraseña</Label>
                     <Input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Escriba su contraseña'
                        required
                        value={dataForm.password}
                        onChange={handleChange}
                     />
                  </InputGroup>
                  <Submit>Iniciar Sesión</Submit>
                  <ButtonSecondary
                     onClick={handleRegister}
                  >Registrarse</ButtonSecondary>
               </Form>
               :
               <Form onSubmit={handleSubmitRegister}>
                  <InputGroup>
                     <Label
                        htmlFor='name'
                     >Nombre</Label>
                     <Input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Escriba su nombre'
                        required
                        value={dataForm.name}
                        onChange={handleChange}
                     />
                  </InputGroup>
                  <InputGroup>
                     <Label
                        htmlFor='email'
                     >Correo</Label>
                     <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Escriba su correo'
                        required
                        value={dataForm.email}
                        onChange={handleChange}
                     />
                  </InputGroup>
                  <InputGroup>
                     <Label
                        htmlFor='password'
                     >Contraseña</Label>
                     <Input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Escriba su contraseña'
                        required
                        value={dataForm.password}
                        onChange={handleChange}
                     />
                  </InputGroup>
                  <Submit>Registrarse</Submit>
                  <ButtonSecondary
                     onClick={handleRegister}
                  >Iniciar Sesión</ButtonSecondary>
               </Form>
         }
      </div>
   )
}

export default FormLogin
