import React, { useEffect ,useState } from 'react'
import { useHistory } from "react-router-dom";

const PaymentStatus = ({ location }) => {

   const history = useHistory();
   const [isSuccess, setIsSuccess] = useState(false)

   useEffect(() => {
      if (location.pathname === '/payment_success') {
         setIsSuccess(true)
      }
   }, [])

   const handleBack = () => {
      if (isSuccess) {
         localStorage.removeItem('cart')
         history.push('/')
      } else {
         history.push('/cart')
      }
   }
   return (
      <div>
         {
            isSuccess ? <h1>su pago se ha realizado exitosamente</h1> : <h1>error en su transacción</h1>
         }
         <button onClick={handleBack}>volver atrás</button>
      </div>
   )
}

export default PaymentStatus
