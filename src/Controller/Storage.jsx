import { getStorage,getDownloadURL , ref, uploadBytesResumable } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage);

export async function upload(path, file , type , onProgress) { //type means the perpose of the image , like profile picutre or post picture
    if (!file.type.startsWith('image/')) {
        alert('Only image uploads are allowed');
        return;
    }
    // const perpose = type; 
    const myFile = ref(storageRef, path + type ); //file.name will be replaced by type soon
    let uploadTask = uploadBytesResumable(myFile, file);
    uploadTask.on('state_changed',
        (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress(uploadProgress)

        }
    )
    //add a methode to that will run on upload finish
    await uploadTask.then((snapshot) => {
        return 'uploaded'
    })
    .catch((error) => {
        console.log('Upload failed: ', error);
    })
     

} 

export async function getImageUrl(path,type){
    const myFile = ref(storageRef, path + type);
    var imgurl = '';
    await getDownloadURL(myFile).then((url) => {
        imgurl = url;
    })
    return (imgurl)
}