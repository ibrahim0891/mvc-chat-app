import { useEffect, useState } from "react"
import { getDataFromDb } from "../Model/Database"
import { Button } from "../Components/common/Button";


const Connect = () => {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const [otherUser, setOtherUser] = useState(null);

    console.log(currentUser.uid);
    useEffect(() => {
        getDataFromDb('/users/').then((data) => {
            let array = [];
            for (let key in data) {
                if (key !== currentUser.uid) {
                    array.push({ ...data[key], uid: key });
                }
            }
            setOtherUser(array);
        });
    }, []);

    const handleConnect = (user) => {
        alert('You can connect with ' + user.fname + ' ' + user.lname + ' soon!');
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
                                    <img src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
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
                'Loading...'
            )}
        </div>
    );
};


export default Connect