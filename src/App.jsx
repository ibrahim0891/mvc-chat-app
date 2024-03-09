
import { Outlet } from "react-router-dom"
import Header from "./Components/common/Header"
import Nav from "./Components/common/Nav"

 
import { useEffect } from "react"
import { setCurrentUser } from "./Model/currentUser.jsx"

// eslint-disable-next-line react-refresh/only-export-components



function App() {
    useEffect(() => {
        setCurrentUser()
    },[])
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
        </>
    )
} 

export default App
