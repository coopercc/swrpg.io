import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAkKfAje0suoIif-UfcbDOpdevLazOzGfc',
  authDomain: 'swrpg-io.firebaseapp.com',
  databaseURL: 'https://swrpg-io.firebaseio.com',
  projectId: 'swrpg-io',
  storageBucket: 'swrpg-io.appspot.com',
  messagingSenderId: '702394680681',
  appId: '1:702394680681:web:2e48ac5319b772fdc229f8',
  measurementId: 'G-6FPRHWVC1P',
};

export default firebase.initializeApp(config);
