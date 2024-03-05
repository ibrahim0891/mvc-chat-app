
import authChecker from "../Controller/authChecker";
import { getDataFromDb } from "../Model/Database"
import { useEffect, useState } from "react";
const Profile = () => {
     const [user, setUser] = useState(null);
     useEffect(() => {
        authChecker().then((user) => { 
             getDataFromDb('/users/' + user.uid).then((data) => {
               setUser(data)
             })
         })
     }, [])
     return (
        <div className="pad">
             {user ? <div> <h1>{`${user.fname} ${user.lname}`}</h1> <p>{`${user.email}`}</p>  </div> : 'Loading...'}
        </div>
     )
    }

export default Profile