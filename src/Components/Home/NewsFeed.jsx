
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
    }, [])

    const shrink = (str) => {
        if (str.length > 200) {
            return str.slice(0, 200) + '...';
        } else {
            return str;
        }
    }
    const [expendedPost, setExpendedPost] = useState([]);
    const toggleExpendedPost = (index) => {
        if (expendedPost.includes(index)) {
            setExpendedPost([])
        } else {
            setExpendedPost([...expendedPost, index])
        }
        console.log(expendedPost);
    }
    return (
        <div className=" ">
            <h2 className="text-center pad">Articals in your community</h2>
            {posts ? <p> {posts.map((posts, index) =>
                <div key={posts.uid} className="post">
                    <h1 className="blue-accent"> {posts.title} </h1>
                    <p className="author"> {posts.author} </p>
                    <p className="timestamp"> {posts.timeStamp} </p>
                    <hr />
                    <p className="content"> {expendedPost.includes(index) ? posts.content : shrink(posts.content)}
                        {
                            posts.content.length > 200 ?
                                <span className="text-center read-more" onClick={() => { toggleExpendedPost(index) }}>
                                    {expendedPost.includes(index) ? 'Read less' : 'Read more...'}
                                </span> : null}
                    </p>
                    <hr />
                    <p className="text-center dev-message"> Your can interect with this post soon...</p>
                </div>
            )
            } </p> : (posts == null ? 'Loading...' : "Nothing to show...")}
        </div>
    )
}

export default Newsfeed