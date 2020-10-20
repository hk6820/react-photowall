import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCdiZKZKjtWXfq4cDJZXhSOlv9QT-5nqAo",
    authDomain: "photowall-b22b6.firebaseapp.com",
    databaseURL: "https://photowall-b22b6.firebaseio.com",
    projectId: "photowall-b22b6",
    storageBucket: "photowall-b22b6.appspot.com",
    messagingSenderId: "903468000528",
    appId: "1:903468000528:web:857069bde5d8d935933195",
    measurementId: "G-6TLDWZWRJC"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()
  export {database}