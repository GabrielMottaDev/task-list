import { FirebaseOptions } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCBjWyBRMrfOZl6qOXbKM9TXS9gmpeKaqc",
    authDomain: "task-list-d65c2.firebaseapp.com",
    databaseURL: "https://task-list-d65c2-default-rtdb.firebaseio.com",
    projectId: "task-list-d65c2",
    storageBucket: "task-list-d65c2.appspot.com",
    messagingSenderId: "740742646497",
    appId: "1:740742646497:web:78dfd2c4b2860ba74e85a0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;