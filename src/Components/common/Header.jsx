import { useEffect , useState} from "react";
import authChecker from "../../Model/authChecker";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [authenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        authChecker().then((loggedIn) => {
            if (loggedIn) {
                setIsAuthenticated(true); 
            } else {
                setIsAuthenticated(false);
                navigate('/auth/login');
            }
        });
    }, [authenticated]);
    return ( 
        <div>
            {authenticated ? <header>
                <h1> {'Experimental app'} </h1>
                <p> UI can change the way how user will interect </p>
            </header>: 'Loading...'}
        </div>
  )
  
}

export default Header;
