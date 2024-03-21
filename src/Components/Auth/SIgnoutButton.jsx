 import auth from "../../../firebase";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
const SighoutButton = ({classes}) => {
    const redirect = useNavigate();
      const signout = () => {
        signOut(auth).then(() => {
              // Sign-out successful.
              console.log('signout successful');
              redirect('/auth');
              localStorage.setItem('user', null);   

          }).catch((error) => {
              // An error happened.
              console.log(error);
          });
      }
    return (
        <button className={classes} onClick={signout}>Sign out</button>
    )
}
export default SighoutButton;