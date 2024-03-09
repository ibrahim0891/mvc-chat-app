
import { useEffect, useState } from "react";
import { getDataFromDb } from "../../Model/Database";
const Newsfeed = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        getDataFromDb('/posts').then((data) => {
            let array = [];
            for (let key in data) {
                array.push({ ...data[key], uid: key });
            } 
            setPosts(array); 
        }) 
    },[])

    return (
        <div className=" ">
            <h1>Newsfeed</h1>
            {posts ? <p> {posts.map((posts) => 
                    <div key={posts.uid} className="post">
                        <h1 className="blue-accent"> {posts.title} </h1>
                        <p className="author"> {posts.author} </p>
                        <p> {posts.timeStamp} </p>
                        <hr />
                        <p className="content"> {posts.content} </p>
                    </div>
                )
            } </p> : (posts == null ? 'Loading...' : "Nothing to show..." ) } 
        </div>
    )
}

export default Newsfeed