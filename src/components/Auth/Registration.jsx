import { useState } from "react"
import AuthControler from "../../controllers/AuthControler"

const Registration = () => {
  const [name , setName ] = useState('')
  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')
  const signUpData = {
    name : name , 
    email : email , 
    password : password
  }
  return ( 
        <form action="">
            <label htmlFor="">Full Name </label>
            <input type="text" placeholder="Jhon Doe" />
            <label htmlFor="">Enter Your email</label>
            <input type="email" placeholder="abc@gmail.com" />
            <label htmlFor="">Create new password</label>
            <input type="password" placeholder="password" />
            <button>Sign up </button>
            
            <AuthControler credential={signUpData}/>
        </form> 
  )
}
export default Registration