const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyC_KKAA-qUKzqaBswiHwggtZWxjJQnhkv4",
  authDomain: "vidu-505fc.firebaseapp.com",
  projectId: "vidu-505fc",
  storageBucket: "vidu-505fc.appspot.com",
  messagingSenderId: "372985969237",
  appId: "1:372985969237:web:61a9835e01e687a288f2dc",
  measurementId: "G-D3QQ63LNZT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
