
import { useEffect } from "react"
import HomepageHeader from "../Components/Home/HomepageHeader"
import Newsfeed from "../Components/Home/NewsFeed" 
import { setCurrentUser } from "../Model/currentUser"
 
const Home = () => {
    useEffect(() => {
      setCurrentUser()
    })
    return ( 
        <div className="pad"> 
            <Newsfeed/>
            <HomepageHeader/>
            <a href="https://github.com/ibrahim0891/mvc-chat-app" className="text-center app-version dev-message tooltip"> App version: v3.29.24.05.09.1 
                <span className="tooltiptext">View code</span>
            </a>
        </div>
    )
}

export default Home