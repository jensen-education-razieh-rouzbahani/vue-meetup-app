import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase";
import store from "./store";
import DateFilter from "./filters/date";
import AlertCmp from "./components/alert.vue";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIjKmqP3sh0gcygKqKt_RlJ5hcWzd2lyU",
      authDomain: "vue-meetup-app-d4082.firebaseapp.com",
      databaseURL: "https://vue-meetup-app-d4082.firebaseio.com",
      projectId: "vue-meetup-app-d4082",
      storageBucket: "vue-meetup-app-d4082.appspot.com",
      messagingSenderId: "920627343105",
      appId: "1:920627343105:web:be7142a221cd3a6ae2b500",
      measurementId: "G-TMTB54Y6MH",
    });
  },
}).$mount("#app");
