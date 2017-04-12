let firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
let firebaseui = require('firebaseui');

firebase.initializeApp({
  apiKey: 'AIzaSyCBLXn5d6QLFj1c2qCn5j3XvPTpkhhqZyw',
  authDomain: 'levelup-ee96f.firebaseapp.com',
  databaseURL: 'https://levelup-ee96f.firebaseio.com',
  projectId: 'levelup-ee96f',
  storageBucket: 'levelup-ee96f.appspot.com',
  messagingSenderId: '88343316553'
});

let fbDB = firebase.database();
let fbAuth = firebase.auth();

(() => {
  let currentUser;
  let loginContainerElement = document.getElementById('firebaseui-auth-container');
  let registrationFormElement = document.getElementById('registration-form');
  let voornaamInputElement = document.getElementById('voornaam-input');
  let achternaamInputElement = document.getElementById('achternaam-input');
  let signOutButtonElement = document.getElementById('sign-out-button');

  let errorHandler = (error) => console.error('something went wrong', error);
  let showLogin = () => {
    loginContainerElement.style.display = 'block';
    signOutButtonElement.style.display = 'none';
    registrationFormElement.style.display = 'none';
  };

  let showForm = (user) => {
    user.getToken().then(accessToken => {
      console.log('signed in', user, accessToken);

      loginContainerElement.style.display = 'none';
      signOutButtonElement.style.display = 'block';
      registrationFormElement.style.display = 'block';
    }, errorHandler);
  };

  let handleSignOut = (evt) => {
    evt.preventDefault();

    fbAuth.signOut().then(() => {
      console.log('signed out');
    }, errorHandler);
  };

  let initApp = () => {
    // hide the login container initially
    loginContainerElement.style.display = 'none';

    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start(`#firebaseui-auth-container`, {
      signInSuccessUrl: '/',
      signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '/'
    });

    signOutButtonElement.addEventListener('click', handleSignOut);
    // registrationFormElement.addEventListener('submit', TODO);

    // this will get triggered after page is loaded as well
    fbAuth.onAuthStateChanged((user) => {
      currentUser = user;
      user ? showForm(user) : showLogin();
    });
  };

  window.addEventListener('load', initApp);
})();