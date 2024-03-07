import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase";

const authChecker = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                resolve(false);
            }
        });
    });
};


export default authChecker
