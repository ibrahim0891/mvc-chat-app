

import { getDatabase, ref, set} from "firebase/database";

const writeNodeInDb = (data, path) => {
    const db = getDatabase();
    const dbRef = ref(db, path);
    set(dbRef, data).then((data) => {
        console.log("Data written to the database. Data is: ", data);
    }).catch((error) => {
        console.log("Error writing to the database", error);
    })
    return (null)
}

export default writeNodeInDb