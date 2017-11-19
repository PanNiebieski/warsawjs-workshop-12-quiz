import Vue from 'vue'
import App from './App.vue'

import router from './index';
import quizzesFile from "./data/quizzes.json";

new Vue({
  el: '#app',
  router,
  data : {
    quizzes:quizzesFile.quizzes,
  },
  render: h => h(App),
})
