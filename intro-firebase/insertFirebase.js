

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDBsvq3UfJJw8le9vV_cEIUzWpSarmJGls",
   authDomain: "aerial-chimera-254823.firebaseapp.com",
   databaseURL: "https://aerial-chimera-254823.firebaseio.com",
   projectId: "aerial-chimera-254823",
   storageBucket: "aerial-chimera-254823.appspot.com",
   messagingSenderId: "133300439623",
   appId: "1:133300439623:web:357c93dcaf5c2ad3647f62",
   measurementId: "G-7D7LRQZFJG"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 // Get a reference to the database service
 let database = firebase.database();


//  Set new data into database firebase
//  database
//    .ref("users/admin")
//    .set({
//      username: "Walter",
//      email: "walterkstro@gmail.com",
//      password: "hellowordl2020",
//      range: "admin"
//    })
//    .then(() => {
//      console.info("Regiser success");
//    });



const btn = document.getElementById('submit')
btn.addEventListener('click', e => {
   e.preventDefault()
   const message = document.querySelector('.message')
   const user = document.querySelector('.username')

   database.ref('chats').push({
      user: user.value,
      msg : message.value
   }).then ( () => {
      console.log('Sending Ok')
      user.value=''
      message.value = ''
   })
})