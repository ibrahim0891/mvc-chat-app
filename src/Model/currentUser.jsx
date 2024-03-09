
import authChecker from "./authChecker"
import { getDataFromDb } from "./Database"

export function setCurrentUser( ) {
    authChecker().then((user) => {
        getDataFromDb('/users/' + user.uid).then((data) => {
            localStorage.setItem('user', JSON.stringify({...data , uid: user.uid}))
        })
    })

}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}