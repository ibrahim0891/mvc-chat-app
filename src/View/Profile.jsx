
import authChecker from "../Model/authChecker";
import { getDataFromDb, updateDataInDb } from "../Model/Database"
import { useEffect, useState } from "react";
import SignoutButton from '../Components/Auth/SIgnoutButton'
import { upload, getImageUrl } from "../Controller/Storage";



const Profile = () => {
    const [user, setUser] = useState(null);
    let [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatetext, setUploadStateText] = useState('')
    const [showUpload, setShowUpload] = useState(false)
    useEffect(() => {
        authChecker().then((user) => {
            getDataFromDb('/users/' + user.uid).then((data) => {
                setUser(data)
                // sessionStorage.setItem('user', JSON.stringify(data))

            })
        })
    }, [])

    const onUploadProgress = (progress) => {
        setUploadProgress(progress)
        setShowUpload(true)
        if (progress == 100) {
            setUploadStateText('Your image will be visible soon! You can upload another one!')

        } else {
            setUploadStateText('Uploading...')

        }
    }

    const userOnce = JSON.parse(localStorage.getItem('user'));
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        upload('/profile/' + userOnce.uid + '/', file, 'profile-picture', onUploadProgress).then((msg) => {
            getProfilePicture()

        })
    }
    const [profilePicture, setProfilePicture] = useState('')
    useEffect(() => {
        getProfilePicture()
    }, [])
    const getProfilePicture = () => {
        getImageUrl('/profile/' + userOnce.uid + '/', 'profile-picture').then((url) => {
            setProfilePicture(url)
            updateDataInDb('/users/' + userOnce.uid, { profilePicture: url })
        })
    }

    return (
        <div>

            <div className="pad">
                {user ? <div className="text-center pad"> <h1>{`${user.fname} ${user.lname}`}</h1> <p>{`${user.email}`}</p>  </div> : 'Loading...'}
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
                    user ?
                        <div className="pad">
                            <h3 className="pad text-center"> Your profile picture: </h3>
                             { profilePicture == '' ? 'You haven\'t uploaded any picture yet ' : <img className="profile-picture" src={profilePicture} alt="" />}
                        </div> : 'Loading..'}'You haven\\'t uploaded any picture yet ' 
                <div className="pad text-center">
                    <SignoutButton classes=' ' />
                </div>
            </div>
        </div>
    )
}

export default Profile