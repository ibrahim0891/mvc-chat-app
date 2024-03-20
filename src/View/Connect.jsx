import { useEffect, useState } from "react"
import { getDataFromDb } from "../Model/Database"
import { Button } from "../Components/common/Button";
import { getCurrentUser } from "../Model/currentUser";


const Connect = () => {
    const currentUser = getCurrentUser() 
    const [otherUser, setOtherUser] = useState(null); 
    useEffect(() => {
        getDataFromDb('/users/').then((data) => {
            let array = [];
            for (let key in data) {
                if (key !== currentUser.uid) {
                    array.push({ ...data[key], uid: key });
                }
            }
            setOtherUser(array);
        }).catch(() => {
             setOtherUser(null);
        });
    }, []); 

    const handleConnect = (user) => {
        alert('You can connect with ' + user.fname + ' ' + user.lname + ' soon! His uid is ' + user.uid);
    }
    return (
        <div className="pad">
            <h4>Connnect with your community.</h4>
            {otherUser ? (
                otherUser.map((user) => {
                    return (
                        <div key={user.uid} className="user-card">
                            <div className="part-1">
                                <div className="user-card-image">
                                    <img src={user.profilePicture} alt="" />
                                </div>
                                <div className="user-card-info">
                                    <h4>{user.fname} {user.lname}</h4>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                            <div className="user-card-button">
                                <Button buttonAction={()=>{handleConnect(user)}} buttonText={'Connect'}></Button>
                            </div>
                        </div>
                    );
                })
            ) : (
                otherUser == null ? 'Loading...' : 'No one to connect with!'
            )}
        </div>
    );
};


export default Connect