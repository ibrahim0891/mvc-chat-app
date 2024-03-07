/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authChecker from "../Model/authChecker";
import Header from "../Components/common/Header";
import AuthpageHeader from "../Components/Auth/AuthPageHeader";
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
            <AuthpageHeader authpagemessage={"welcome to the DPI community"} />
            <Outlet />
        </div>

    )
}

export default Authentication