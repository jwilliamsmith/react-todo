'use strict';

import firebase from 'firebase';

try {
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const githubProvider = new firebase.auth.GithubAuthProvider();

export const fbref = firebase.database().ref();
export default firebase;


