/* eslint-disable react/prop-types */
import { useState } from "react"


const Login = ({authenticate}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [logInData, setLogInData] = useState({})
    const handleSubmit = (e) => {
      e.preventDefault();
      authenticate({email : email , password : password })
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Your email</label>
                <input type="text" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Enter Your Password</label>
                <input type="password" name="" id="" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" > Log in </button>
            </form>
            {/*TODO: send the login credential to controller so that the controller can send the data to firebase  */}
        </>
    )
}
export default Login