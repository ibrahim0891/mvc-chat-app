
import Authcontroler from "../../Controller/Authcontroler"
import { useState } from "react"
import { useNavigate , Link } from "react-router-dom";
 
import SectionDivider from "./SectionDivider";
import Button from "../common/Button";
import Input from "../common/Input";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState(""); 
    const [anyError , setAnyError] = useState(null)
    const [processing, setProcessing] = useState(false);
    const credentials = {
        email,
        password,
        fname,
        lname
    }
    const handleSubmit = (e) => {
        setProcessing(true)
        e.preventDefault(); 
        Authcontroler(credentials, navigate, 'signup').then((error)=>{
            if (error) {
                setAnyError(error)
                console.log(anyError);
                setProcessing(false)
            }
        })
    }
    return (
        <div className="login">
            <h1>Sign Up</h1>
            {anyError && <p className="error-message"><span>{anyError} </span><span className="close-error" onClick={()=> setAnyError(null)}>ok</span></p>}
            <form onSubmit={handleSubmit}>
                <Input type={'text'} handleInput={(e)=> { setFirstName(e.target.value)}} placeholder={'Firstname'} isRequired={true} />
                <Input type={'text'} handleInput={(e) => { setLastName(e.target.value) }} placeholder={'Lastname'} isRequired={true}/>
                <Input type={'text'} handleInput={(e) => { setEmail(e.target.value)} } placeholder={'Email'} isRequired={true}/> 
                <Input type={"password" } handleInput={(e) => { setPassword(e.target.value) }} placeholder="Password" isRequired={true}/>
                <Button ButtonText={processing? 'Signing up...' : 'Sign up'}/>
            </form>
            <SectionDivider/>
            <div className="login-footer">
                <p> Already have account? <Link to='/auth/login'> Log in </Link> </p>  
            </div>
        </div>
    )
}

export default SignUp