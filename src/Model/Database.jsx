

import { getDatabase, ref, set , get, child , update, push } from "firebase/database";

const db = getDatabase();

export async function writeNodeInDb(data, path){
    let dbRef = ref(db, path);
    await set(dbRef, data).then(( ) => {
        console.log("Data written to the database. " )
    }).catch((error) => {
        console.log("Error writing to the database", error);
    })
    return (null)
}


export async function getDataFromDb(path){ 
    let userdata = null;
    await get(child(ref(db),path)).then((snapshot) => {
        if (snapshot.exists()) { 
            userdata = snapshot.val(); 
        } else {
            console.log("No data available");
            return (null)
        }
    }).catch((error) => {
        console.log("Error getting data:", error);
        return (null)
    })
    return userdata;
}

export async function createUniqeKey(path){
    let dbRef = ref(db)
    let uniqueKey = push(child(dbRef, path)).key;
    return (uniqueKey)
}

export async function updateDataInDb(data){ 
    update(ref(db), data )  //data must be a object
    return ('data updated')
}