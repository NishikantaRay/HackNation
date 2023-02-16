import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyA3lHSoY3sIvXAHhzpbLzBJbfYyr7A5d1c",
    authDomain: "campus-health-hub.firebaseapp.com",
    projectId: "campus-health-hub",
    storageBucket: "campus-health-hub.appspot.com",
    messagingSenderId: "320759444094",
    appId: "1:320759444094:web:e1ff5eefc1975f642e5e2f",
    measurementId: "G-7XFPGDE6Z2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// const messaging = getMessaging();
// Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BLogzQ5YJDojR98JvrAVXN7trqg-9RZejutTftM4xJ_Pbdb76elMqFzKwJ6Ts5ItDh389SmJJA9sfrniahLSuK8"}).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    }
);
function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

      } else {

        console.log('Unable to get permission to notify.');
      }
    });
    }

requestPermission();