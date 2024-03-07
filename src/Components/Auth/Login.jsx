import { useState } from "react"
import AuthController from "../../Controller/Authcontroler";
import { useNavigate, Link } from "react-router-dom";
import SectionDivider from "./SectionDivider";

import {Button} from "../common/Button";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [anyError , setAnyError] = useState(null);
    const [processing, setProcessing] = useState(false);

 function handleSubmit(e) { 
        setProcessing(true)
        e.preventDefault()
        const credentials = {
            email,
            password
        }
        AuthController(credentials, navigate, 'login').then((error) => {
            if (error) {
                setAnyError(error)
                console.log(anyError);
                setProcessing(false)
            }
          
        })
    } 
    return (
        <div className="login">
            <div className="login-content">
                <h1>Login</h1>
                {anyError && <p className="error-message"><span>{anyError} </span><span className="close-error" onClick={()=> setAnyError(null)}>ok</span></p>}
                <form action="">
                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email" />
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                    <Button buttonText={processing? 'Loggin in...' : 'Log in'} buttonAction={handleSubmit}/>
                </form>
                <SectionDivider />
                <div className="login-footer">
                    <p> Don&apos;t have account? <Link to='/auth/signup'> Sign up </Link> </p>
                </div>
            </div>

        </div>
    )
}
export default Login    