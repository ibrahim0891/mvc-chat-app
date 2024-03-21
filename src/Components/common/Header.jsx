import { useEffect, useState } from "react";
import authChecker from "../../Model/authChecker";
import { useNavigate } from "react-router-dom";
import { getProfilePicture } from "../../Model/currentUser";
const Header = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
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
    useEffect(() => {
        getProfilePicture().then((url) => {
            setUrl(url)
        })
    }, [])
    return (
        <div >
            {authenticated ? <header className="main-header">
                <h2>CST-Community</h2>
                <div className="profile-picture-container">
                    {url ? <img src={url} alt="profile-picture" className="profile-picture" /> : 'loading ...'}
                </div>
            </header> : 'Loading...'}
        </div>
    )

}

export default Header;
