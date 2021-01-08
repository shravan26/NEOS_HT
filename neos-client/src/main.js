import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes/index'
import Axios from 'axios'


// import * as firebase from 'firebase'

Vue.config.productionTip = false

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');

Axios.defaults.baseURL = 'https://asia-south1-neosht-fbe05.cloudfunctions.net/api';

Vue.prototype.$http.defaults.headers.common['Authorization'] = token;


// var fbConfig = {
//     apiKey: "AIzaSyDdq4C96JI_-Nhsy0HndalLhi8dAwQ3iMg",
//     authDomain: "neosht-fbe05.firebaseapp.com",
//     projectId: "neosht-fbe05",
//     storageBucket: "neosht-fbe05.appspot.com",
//     messagingSenderId: "587133900993",
//     appId: "1:587133900993:web:34da4c299b1ea05be69c40",
//     measurementId: "G-L4Z8N4RX49"
// }

// firebase.initializeApp(fbConfig)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
