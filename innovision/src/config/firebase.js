import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA46fcqDtt-r8XLmSP_tLSDmBgWuK7Lflo",
    authDomain: "innovation-website-301ce.firebaseapp.com",
    projectId: "innovation-website-301ce",
    storageBucket: "innovation-website-301ce.appspot.com",
    messagingSenderId: "9817631955",
    appId: "1:9817631955:web:53fadc652b24828878b826",
    measurementId: "G-F46QRRYP1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;