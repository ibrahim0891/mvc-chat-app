import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

/**
 * Uploads a file to Firebase Storage.
 * 
 * @param {string} path - The folder path to upload the file to.
 * @param {File} file - The File object to upload.
 * 
 * @returns {Promise<number>} A Promise that resolves with the final upload progress percentage.
 */
export function RunCode(path, file , type , onProgress) { //type means the perpose of the image , like profile picutre or post picture
    if (!file.type.startsWith('image/')) {
        alert('Only image uploads are allowed');
        return;
    }
    const storage = getStorage();
    const storageRef = ref(storage);
    // const perpose = type; 
    const myFile = ref(storageRef, path + file.name); //file.name will be replaced by type soon
    let uploadTask = uploadBytesResumable(myFile, file);
    uploadTask.on('state_changed',
        (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress(uploadProgress)

        }
    )
} 
