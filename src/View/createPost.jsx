import WritePost from "../Components/Post/WritePost"
import Input from "../Components/common/Input"

const CreatePost = () => {
  return (
    <div>
        <h1>Create Post</h1>
        <Input type={'text'} placeholder={'Title'} isRequired={true}/>
        <WritePost/>
    </div>
  )
}

export default CreatePost