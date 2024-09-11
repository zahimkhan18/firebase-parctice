  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCh2lCF7-gIgmzQIRc7fubfCpX7aBy8_i4",
    authDomain: "practiceproject-760b8.firebaseapp.com",
    projectId: "practiceproject-760b8",
    storageBucket: "practiceproject-760b8.appspot.com",
    messagingSenderId: "22131487151",
    appId: "1:22131487151:web:4aadd84066301f7c343f5a",
    measurementId: "G-GVWDRWW019"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const stdname = document.querySelector("#name")
const rollno = document.querySelector("#rollno")
const table = document.querySelector("#table")


const submit = () => {
    let a = stdname.value
    let b = rollno.value

    table.innerHTML += 
    `
    <tbody>
    <tr>
    <td>${a}</td>
    <td>${b}</td>    
    </tr>
    </tbody>
    
    `; 
    stdname.innerHTML = ""
    rollno.innerHTML = ""
}

