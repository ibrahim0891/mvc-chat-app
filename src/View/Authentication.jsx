/* eslint-disable react-hooks/exhaustive-deps */


import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authChecker from "../Controller/authChecker"; 

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loggedIn, setIsLoggedIn] = useState(false); 

    const navigate = useNavigate();
    useEffect(() => {
        authChecker().then((loggedIn) => {
            if (loggedIn) {
                setIsLoggedIn(true)
                navigate('/'); 
            }
        });
    }, [loggedIn])
    return (
        <div> 
                <div className="user-auth-type">
                    <div className="buttons">
                        {/* <h1>{'{Experimental App}'}</h1> */}
                        <div>
                            <button onClick={() => setIsLogin(true)}> Log in </button>
                            <button onClick={() => setIsLogin(false)}> Sign up </button>
                        </div>
                    </div>
                    {isLogin ? <Login /> : <SignUp />}
                </div> 
        </div>

    )
}

export default Authentication