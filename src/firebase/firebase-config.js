import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDyTycQtpjyO_JB7-9TVEu1Uw8pX1WYn3c',
	authDomain: 'react-app-cursos-760a2.firebaseapp.com',
	projectId: 'react-app-cursos-760a2',
	storageBucket: 'react-app-cursos-760a2.appspot.com',
	messagingSenderId: '751964060657',
	appId: '1:751964060657:web:6a170d4421a76252f82250'
};

const firebaseConfigTesting = {
	apiKey: 'AIzaSyCU-oNT9rwUcXuXJqBroMiZ8PKDL-FS3hI',
	authDomain: 'react-testing-57352.firebaseapp.com',
	projectId: 'react-testing-57352',
	storageBucket: 'react-testing-57352.appspot.com',
	messagingSenderId: '436682429254',
	appId: '1:436682429254:web:d2d08fef3fc6491f7f0b47',
	measurementId: 'G-H55M77H11T'
};

if (process.env.NODE_ENV === 'test') {
	// testing
	firebase.initializeApp(firebaseConfigTesting);
} else {
	// dev/prod
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
