import { useState } from "react"
import Login from "../components/Auth/Login"
import Registration from "../components/Auth/Registration"
const AuthView = () => {
    const [userAction, setUserAction] = useState('logIn')
    return (
        <div>
            <button onClick={(e) => setUserAction('logIn')}>Log in </button>
            <button onClick={(e) => setUserAction('signUp')}> Sign up </button>
            <div>
                <h1>{userAction == 'logIn' ? "Log in" : 'Sign Up'}</h1>
            </div>
            {userAction == 'logIn' ? <Login /> : <Registration />}
        </div>
    )
}
export default AuthView