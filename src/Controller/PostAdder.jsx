
import { createUniqeKey , updateDataInDb } from "../Model/Database";

export async function PostAdder(postData) {
 

   await createUniqeKey('/posts').then((key) => {
        const updates = {};
        updates['/posts/' + key] = postData; 
        updateDataInDb(updates)
    })   
    return ("posted successfully")
}