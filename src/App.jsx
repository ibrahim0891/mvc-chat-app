
import { Outlet } from "react-router-dom"
import Header from "./Components/common/Header"
import Nav from "./Components/common/Nav"


import authChecker from './Model/authChecker.jsx'
import { getDataFromDb } from './Model/Database.jsx'
import { useEffect } from "react"


export function storeUserInLocalStorage( ) {
    authChecker().then((user) => {
        getDataFromDb('/users/' + user.uid).then((data) => {
            sessionStorage.setItem('user', JSON.stringify({...data , uid: user.uid}))
        })
    })

}


function App() {
    useEffect(() => {
        storeUserInLocalStorage()
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
