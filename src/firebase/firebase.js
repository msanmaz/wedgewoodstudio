import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBrQdXihx9l_vdHFtgdYTfl1Q4_yS3YX_8",
    authDomain: "wedgewood-38ca5.firebaseapp.com",
    projectId: "wedgewood-38ca5",
    storageBucket: "wedgewood-38ca5.appspot.com",
    messagingSenderId: "267704183793",
    appId: "1:267704183793:web:cb44c55b8f29e2c08eb250",
    measurementId: "G-HPG5S6F0SX"
};


export const app = initializeApp(firebaseConfig)

export const database = getStorage(app)