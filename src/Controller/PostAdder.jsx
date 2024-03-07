
import { createUniqeKey , updateDataInDb } from "../Model/Database";

export function PostAdder(postData) {

    const user = JSON.parse(sessionStorage.getItem('user')); 

    createUniqeKey('/posts').then((key) => {
        const updates = {};
        updates['/posts/' + key] = postData; 
        updateDataInDb(updates)
    })   
    return ("posted successfully")
}