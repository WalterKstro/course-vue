

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
            // data provee informacion del objeto que se envia con push o set
         }).then( (data) => {
            this.user = ''
            this.message = ''
         })
      },
      // parametro mensajes es un objeto que contiene
      // toda la informacion de la base de datos firebase
      loadMessages(mensajes) {
         this.messages = mensajes
      },
      // event obtiene informacion del evento que disparo la funcion,
      // index es la key que indetifica a cada objeto, este es unico e irrepetible
      updateMessage( event, index) {
         database.ref('chats/' + index).update({
            message : event.target.textContent
         })
      }
   }
})