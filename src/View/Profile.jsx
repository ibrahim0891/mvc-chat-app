
import authChecker from "../Model/authChecker";
import { getDataFromDb, updateDataInDb } from "../Model/Database"
import { useEffect, useState } from "react";
import SignoutButton from '../Components/Auth/SIgnoutButton'
import { upload, getImageUrl } from "../Controller/Storage";
import { useNavigate } from "react-router-dom";


const Profile = (uid) => {
    const [user, setUser] = useState(null);
    let [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatetext, setUploadStateText] = useState('')
    const [showUpload, setShowUpload] = useState(false)
    const [profilePicture, setProfilePicture] = useState('')
    const history = useNavigate()
    // useEffect(() => {
    //     authChecker().then((user) => {
    //         getDataFromDb('/users/' + user.uid).then((data) => {
    //             setUser(data)
    //             // sessionStorage.setItem('user', JSON.stringify(data))
    //         })
    //     })
    // }, [])

    const onUploadProgress = (progress) => {
        setUploadProgress(progress)
        setShowUpload(true)
        if (progress == 100) {
            setUploadStateText('Uploaded!')
            updateDataInDb('/users/' + userOnce.uid, { profilePicture: profilePicture })
        } else {
            setUploadStateText('Uploading...')

        }
    }

    const userOnce = JSON.parse(localStorage.getItem('user'));
    console.log(userOnce);
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        upload('/profile/' + userOnce.uid + '/', file, 'profile-picture', onUploadProgress).then((msg) => {
            getProfilePicture() 
        })
    }
    useEffect(() => {
        getProfilePicture()
    }, [])
    const getProfilePicture = () => {
        getImageUrl('/profile/' + userOnce.uid + '/', 'profile-picture').then((url) => {
            setProfilePicture(url)
        })
    }
console.log(uid);
    return (
        <div>

            <div className="pad">
                {userOnce ? <div className="text-center pad"> <h1>{`${userOnce.fname} ${userOnce.lname}`}</h1> <p>{`${userOnce.email}`}</p>  </div> : 'Loading...'}
                <div className="pad">
                    <p> Select an image to upload!</p>
                </div>
                <input type="file" onChange={handleFileSelect} />
                {showUpload &&
                    <div>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: uploadProgress + '%' }}> </div>
                        </div>
                        <div className="upload-state">
                            <p> {uploadProgress.toFixed(0) + '%'} </p>
                            <p className="progress-text text-center"> {uploadStatetext} </p>
                        </div>
                    </div>
                }
                {
                    userOnce ?
                        <div className="pad">
                            <h3 className="pad text-center"> Your profile picture: </h3>
                             { userOnce.profilePicture == null ? 'You haven\'t uploaded any picture yet ' : <img className="profile-picture" src={userOnce.profilePicture} alt="" />}
                        </div> : 'Loading..'} 
                <div className="pad text-center">
                    <SignoutButton classes=' ' />
                </div>
            </div>
        </div>
    )
}

export default Profile