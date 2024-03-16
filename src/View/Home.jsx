
import HomepageHeader from "../Components/Home/HomepageHeader"
import Newsfeed from "../Components/Home/NewsFeed" 
 
const Home = () => {
    return ( 
        <div className="pad"> 
            <Newsfeed/>
            <HomepageHeader/>
            <a href="https://github.com/ibrahim0891/mvc-chat-app" className="text-center app-version dev-message tooltip"> App version: v3.16.24.4.48.1 
                <span className="tooltiptext">View code</span>
            </a>
        </div>
    )
}

export default Home