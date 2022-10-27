// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyDusAT0LzVn6pWUNHfnMlFU0RAppoT-Hgs',
	authDomain: 'lvlupblog-3f7e3.firebaseapp.com',
	databaseURL: 'https://lvlupblog-3f7e3-default-rtdb.firebaseio.com',
	projectId: 'lvlupblog-3f7e3',
	storageBucket: 'lvlupblog-3f7e3.appspot.com',
	messagingSenderId: '300061091649',
	appId: '1:300061091649:web:0ee1b4afc56db3a4cb23c0',
	measurementId: 'G-PW225V0XG8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
