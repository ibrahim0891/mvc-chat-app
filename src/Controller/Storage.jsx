import { getStorage,getDownloadURL , ref, uploadBytesResumable } from "firebase/storage";
import imageCompression from "browser-image-compression";
const storage = getStorage();
const storageRef = ref(storage);

async function compressImage(imageFile){
  let options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 600,
    useWebWorker: true,
  }
  const compressedFile = await imageCompression(imageFile, options) 
  return compressedFile
}


export async function upload(path, file , type , onProgress) { //type means the perpose of the image , like profile picutre or post picture
    if (!file.type.startsWith('image/')) {
        alert('Only image uploads are allowed');
        return;
    }
    // const perpose = type; 
    const myFile = ref(storageRef, path + type ); //file.name will be replaced by type soon
    console.log();
    compressImage(file).then((file) => {
        let uploadTask = uploadBytesResumable(myFile, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress(uploadProgress)

            }
        )
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