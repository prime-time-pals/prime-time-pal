import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc  } from "firebase/firestore";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD9Ws21ZTOYcj1-rwIsNbM--PvGoSqh4Ls",
  authDomain: "prime-time-pal.firebaseapp.com",
  projectId: "prime-time-pal",
  storageBucket: "prime-time-pal.appspot.com",
  messagingSenderId: "358220552084",
  appId: "1:358220552084:web:37926c21d0d9c31564a181",
  measurementId: "G-WWVKYX5EYV"
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

  export const getCollection = async() => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        users.push({ id: doc.id, ...doc.data() })
      });
      return users;
    } catch(e) {
      console.error("Error fetching collection: ", e);
      return [];
    }
  }
    

  

  console.log('Hello there, Firestore!')