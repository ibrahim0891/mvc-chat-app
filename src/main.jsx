import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import './index.css'
import Home from './View/Home.jsx'
import Message from './View/Message.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Auth from './Auth.jsx'
import Authentication from './View/Authentication.jsx'
import Login from './Components/Auth/Login.jsx'
import SignUp from './Components/Auth/SignUp.jsx'
import Profile from './View/Profile.jsx'
import Connect from './View/Connect.jsx'
import CreatePost from './View/createPost.jsx'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/messages',
            element: <Message />
        },{
            path: '/profile',
            element: <Profile/>
        },{
            path: '/connect',
            element: <Connect/>
        },{
            path: '/createpost',
            element: <CreatePost/>
        }]
    },
    {
        path: '/auth',
        element: <Authentication/>,
        children: [{
            path: '/auth/login',
            element : <Login/>
        },
        {
            path: '/auth/signup',
            element: <SignUp/>
        }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)


//todo : if user is already loggedin but still wants to access Auth page then send user to home paged