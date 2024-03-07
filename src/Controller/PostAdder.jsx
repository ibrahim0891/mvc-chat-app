
import { createUniqeKey , updateDataInDb } from "../Model/Database";

export function PostAdder(postData) {
 

    createUniqeKey('/posts').then((key) => {
        const updates = {};
        updates['/posts/' + key] = postData; 
        updateDataInDb(updates)
    })   
    return ("posted successfully")
}