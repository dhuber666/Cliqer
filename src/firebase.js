import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBXQ21T1oyK78lcw3MScFqzombvFyLxif8",
    authDomain: "cliqer-683e2.firebaseapp.com",
    databaseURL: "https://cliqer-683e2.firebaseio.com",
    projectId: "cliqer-683e2",
    storageBucket: "",
    messagingSenderId: "93872329811"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;