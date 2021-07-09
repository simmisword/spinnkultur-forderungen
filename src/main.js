import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBu2GmUDDvTWq1QRcnlho0Hjmt0Tj1MRWo",
authDomain: "spinnkultur-forderungen.firebaseapp.com",
projectId: "spinnkultur-forderungen",
storageBucket: "spinnkultur-forderungen.appspot.com",
messagingSenderId: "388272878347",
appId: "1:388272878347:web:7ecb70a4af5e9c550c280e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
