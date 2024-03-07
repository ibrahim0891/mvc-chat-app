
import {Button} from "../Components/common/Button"
import Input from "../Components/common/Input"

import { useState } from "react" 
import { PostAdder } from "../Controller/PostAdder"

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const user = JSON.parse(sessionStorage.getItem('user'))
    const timeStamp = new Date().toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      
    const handlePostCreate = () => {
        const postData = {
            uid: user.uid,
            title,
            content,
            author: user.fname + ' ' + user.lname,
            timeStamp: timeStamp
        }
        PostAdder(postData)
    }
    return (
        <div className="pad">
            <h1>Create Post</h1>
            <Input type={'text'} placeholder={'Title'} isRequired={true} handleInput={(e) => setTitle(e.target.value)} />
            <p className=""> Enter blog content</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter blog content" onChange={(e)=> setContent(e.target.value)}></textarea>
            <Button buttonText={'Create Post'} buttonAction={() => handlePostCreate()} />
        </div>
    )
}

export default CreatePost