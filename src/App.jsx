
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Nav from "./Components/Nav"


function App() {
    return (
        <>
                <Header/>
                <Nav/>
              <Outlet/>
        </>
    )
}

export default App
