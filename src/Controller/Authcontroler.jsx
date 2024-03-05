import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import {writeNodeInDb} from "../Model/Database";



const Authcontroler = (credentials, navigate, type) => {
    return new Promise((resolve) => {

        if (type === "login") {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    resolve(user)
                    navigate("/");
                }).catch((error) => {
                    resolve(error.message);

                })
        } else {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const data = { email: credentials.email, fname: credentials.fname, lname: credentials.lname, pass: credentials.password };
                    writeNodeInDb(data, `users/${user.uid}`);
                    navigate("/");
                }).catch((error) => {
                    resolve(error.message);
                })
        }
    });

}


export default Authcontroler