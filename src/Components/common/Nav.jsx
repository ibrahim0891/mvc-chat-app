 
import { NavLink } from "react-router-dom";

const Nav = () => {
    const NavLinks = [
        {
            id: 1,
            text: "Home",
            url: "/"
        },
        {
            id: 2,
            text: "Messages",
            url: "/messages"
        },
        {
            id: 3,
            text: "Profile",
            url: "/profile"
        },
        {
            id: 4,
            text: "Connect",
            url: "/connect"
        },
        {
            id: 5,
            text: "Create Post",
            url: "/createpost"
        }
    ]

    return (
        <nav>
            {NavLinks.map((link) => (
                <NavLink key={link.id} to={link.url} activeclassName='active'>{link.text}</NavLink>
            ))}
        </nav>
    )
}


export default Nav;