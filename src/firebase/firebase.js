import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc  } from "firebase/firestore";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBm4EYV2guS5xNra_uoJOfyH4_GKqwcrLE",
    authDomain: "prime-time-pals.firebaseapp.com",
    projectId: "prime-time-pals",
    storageBucket: "prime-time-pals.appspot.com",
    messagingSenderId: "94046890357",
    appId: "1:94046890357:web:85054ee5f4466cf9c78b3c",
    measurementId: "G-XGV2K3MK53"
  });

  const db = getFirestore(firebaseApp);
  // const storage = getStorage();

  // export const uploadImgHook = async (image, setProgress) => {
  //   const imageRef = ref(storage, `images/${image.name}`);
  //   const uploadTask = uploadBytesResumable(imageRef, image);
  
  //   return new Promise((resolve, reject) => {
  //         uploadTask.on(
  //           'state_changed',
  //           (snapshot) => {
  //               const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //               console.log('Upload is ' + progress + '% done');
  //               setProgress(progress);
  //           },
  //           (error) => {
  //               // A full list of error codes is available at
  //               // https://firebase.google.com/docs/storage/web/handle-errors
  //               switch (error.code) {
  //                 case 'storage/unauthorized':
  //                   // User doesn't have permission to access the object
  //                   break;
  //                 case 'storage/canceled':
  //                   // User canceled the upload
  //                   break;
            
  //                 // ...
            
  //                 case 'storage/unknown':
  //                   // Unknown error occurred, inspect error.serverResponse
  //                   break;
  //               }
  //               reject(error);
  //             }
  //           ,
  //           () => {
  //               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //                   console.log('File available at', downloadURL);
  
  //                   resolve(downloadURL);
  //               })
  //               .catch(error => {
  //                 reject(error);
  //               });
  //           }
  //       );
  //   });  
  // };
  

  export const userCollection = async(userDoc, setProgress) => {
    setProgress(true)
    console.log(userDoc)
    try {
        const docRef = await addDoc(collection(db, "users"), userDoc);
        console.log("Document written with ID", docRef.id)
        if (docRef) setProgress(false);
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  }

  console.log('Hello there, Firestore!')