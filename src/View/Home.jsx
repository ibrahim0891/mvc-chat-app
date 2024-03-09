
import HomepageHeader from "../Components/Home/HomepageHeader"
import Newsfeed from "../Components/Home/NewsFeed" 
 
const Home = () => {
    return ( 
        <div className="pad"> 
            <HomepageHeader/>
            <Newsfeed/>
        </div>
    )
}

export default Home