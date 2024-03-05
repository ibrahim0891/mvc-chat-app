/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authChecker from "../Controller/authChecker";
import Header from "../Components/Header";
// import Header from "./Components/Header"

const Authentication = () => {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        authChecker().then((loggedIn) => {
            if (loggedIn) {
                setIsLoggedIn(true)
                navigate('/');
            } else {
                navigate('/auth/login')
            }
        });
    }, [loggedIn])
    return (
        <div className="user-auth-type">
            <Header />
            <Outlet />
        </div>

    )
}

export default Authentication