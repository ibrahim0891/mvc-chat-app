 import auth from "../../../firebase";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
const SighoutButton = () => {
    const redirect = useNavigate();
      const signout = () => {
        signOut(auth).then(() => {
              // Sign-out successful.
              console.log('signout successful');
              redirect('/login');

          }).catch((error) => {
              // An error happened.
              console.log(error);
          });
      }
    return (
        <button onClick={signout}>Sign out</button>
    )
}
export default SighoutButton;