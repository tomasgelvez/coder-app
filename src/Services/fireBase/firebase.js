import * as firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyC3oOP-zIvXhcOrFCRig5dGEkbi9V8AqFg",
    authDomain: "my-app-coder-gelvez.firebaseapp.com",
    projectId: "my-app-coder-gelvez",
    storageBucket: "my-app-coder-gelvez.appspot.com",
    messagingSenderId: "663302674217",
    appId: "1:663302674217:web:2ed001f12dfbd94a540938"
  };



const app = firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app)