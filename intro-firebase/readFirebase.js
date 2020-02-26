

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


const vm = new Vue({
   el:'#app',
   created() {
      // snapshot es una captura del estado en que se encuentra la base de datos
      // y con la funcion val() podemos obtener toda la informacion de la base de datos
      database.ref('/chats').on('value', snapshot => this.loadMessages(snapshot.val()))
   },
   data: {
      user : null,
      message : null,
      messages:[]
   },
   methods: {
      sendMessage() {
         database.ref('chats').push({
            username : this.user,
            message : this.message
            // data have information of object data
         }).then( (data) => {
            this.user = ''
            this.message = ''
         })
      },
      loadMessages(mensaje) {
         this.messages = mensaje
      }
   }
})