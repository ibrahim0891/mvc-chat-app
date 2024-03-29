import { useEffect, useState } from "react"
import { getDataFromDb } from "../Model/Database"
import { Button } from "../Components/common/Button";
import { getCurrentUser } from "../Model/currentUser";
import { Link } from "react-router-dom";

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
                                    <Link to={`/profile/${user.uid}`} >
                                        <h4>{user.fname} {user.lname}</h4>
                                        <p>{user.email}</p>
                                    </Link>

                                </div>
                            </div>
                            <div className="user-card-button">
                                <Button buttonAction={() => { handleConnect(user) }} buttonText={'Connect'}></Button>
                            </div>
                        </div>
                    );
                })
            ) : (
                otherUser == null ? 'Loading...' : 'No one to connect with!'
            )}

            <div>
                <h3>Received Requests</h3>
                <div>
                    <p> User 1 </p>
                    <p> User 2 </p>
                    <p> User 3</p>
                </div>
            </div>
        </div>
    );
};


export default Connect