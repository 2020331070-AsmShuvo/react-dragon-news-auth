import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBcaFVPw-NUbYYi5WjrkqB6beJKCGBtnY4",
  authDomain: "react-dragon-news-49675.firebaseapp.com",
  projectId: "react-dragon-news-49675",
  storageBucket: "react-dragon-news-49675.appspot.com",
  messagingSenderId: "233185375238",
  appId: "1:233185375238:web:05cde9cd1fa427c7217f87",
  measurementId: "G-FHKX7BYKCR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);