import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import writeNodeInDb from "../Model/WriteNodeInDb";


const Authcontroler = (credentials, navigate, type) => {
    const login = () => {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const signUp = () => {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.uid);
                const data = {email : credentials.email , fname: credentials.fname , lname : credentials.lname , pass: credentials.password};
                writeNodeInDb(data, `users/${user.uid}`);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }
    { type === "login" ? login() : signUp() }
}

export default Authcontroler