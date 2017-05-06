'use strict';

import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAJWdJndJuT9irnrXzvwu6xANhWFPMiWxg",
    authDomain: "jws-todo-app.firebaseapp.com",
    databaseURL: "https://jws-todo-app.firebaseio.com",
    storageBucket: "jws-todo-app.appspot.com",
    messagingSenderId: "322058385785"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const fbref = firebase.database().ref();
export default firebase;