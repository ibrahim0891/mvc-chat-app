import { useEffect, useState } from "react"
import AuthController from "../../Controller/Authcontroler";
import { useNavigate } from "react-router-dom"; 
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            email,
            password
        }   
        AuthController(credentials , navigate , 'login');
    }
    
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="">
                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Email" />
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                <button onClick={ handleSubmit }>Login</button>
            </form>
        </div>
    )
}
export default Login    