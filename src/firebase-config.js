/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCL-yWU21kIRcVNoss02aZM0sk6uUoPK8w",
  authDomain: "friendly-chat-6efff.firebaseapp.com",
  projectId: "friendly-chat-6efff",
  storageBucket: "friendly-chat-6efff.appspot.com",
  messagingSenderId: "382093308319",
  appId: "1:382093308319:web:472e78d30bfeb9fc1e4daa"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}