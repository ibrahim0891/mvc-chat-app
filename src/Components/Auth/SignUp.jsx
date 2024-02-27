
import Authcontroler from "../../Controller/Authcontroler"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const credentials = {
        email,
        password,
        fname,
        lname
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Authcontroler(credentials, navigate, 'signup');
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Firstname" />
                <input type="text" onChange={(e) => { setLastName(e.target.value) }} placeholder="Lastname" />
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp