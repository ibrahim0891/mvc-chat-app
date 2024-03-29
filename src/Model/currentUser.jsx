
import authChecker from "./authChecker"
import { getDataFromDb } from "./Database"
import { upload, getImageUrl } from "../Controller/Storage";

export function setCurrentUser( ) {
    authChecker().then((user) => {
        getDataFromDb('/users/' + user.uid).then((data) => {
            // sessionStorage.setItem('user', JSON.stringify({...data , uid: user.uid}))
            localStorage.setItem('user', JSON.stringify({...data , uid: user.uid}))
        })
    })

}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}
const userOnce = JSON.parse(localStorage.getItem('user'));

export async function getProfilePicture() {
    let url = await getImageUrl('/profile/' + userOnce.uid + '/', 'profile-picture') 
    return (url)
}