/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataFromDb } from "../Model/Database"

const DisplayProfile = ({ userData }) => {
    return (
        <div>
            <img src={userData.profilePicture} />
            <h3>{userData.fname} {userData.lname}</h3>
            <p>{userData.email}</p>
            
        </div>
    )
}
const OtherUser = () => {
    const { uid } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getDataFromDb(`/users/${uid}`).then(data => {
            setUser(data)
        })
    }, [uid])
    return (
        <div>
            {user ? <DisplayProfile userData={user} /> :  "Loading..." }
        </div>
    )
}

export default OtherUser