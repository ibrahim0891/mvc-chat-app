
import authChecker from "../Model/authChecker";
import { getDataFromDb } from "../Model/Database"
import { useEffect, useState } from "react";
const Profile = () => {
     const [user, setUser] = useState(null);
     useEffect(() => {
        authChecker().then((user) => { 
             getDataFromDb('/users/' + user.uid).then((data) => {
               setUser(data)
               sessionStorage.setItem('user', JSON.stringify(data))
             })
         })
     }, [])
     return (
        <div className="pad">
             {user ? <div className="text-center"> <h1>{`${user.fname} ${user.lname}`}</h1> <p>{`${user.email}`}</p>  </div> : 'Loading...'}
        </div>
     )
    }

export default Profile