
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./View/Home"
import Header from "./Components/Header"
import Authentication from "./View/Authentication"
import MessageHeader from "./Components/Message/Message-header"

function App() {
    
    return (
        <>
            <BrowserRouter>
            <div>
                <Header /> 
            </div>
                <Routes>
                    <Route path="/login" element={<Authentication />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/messages" element={<MessageHeader />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
