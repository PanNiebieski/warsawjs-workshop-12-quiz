import Vue from 'vue';

import VueRouter from 'vue-router';

import HomePage from "./pages/home.vue";
import QuizPage from "./pages/quiz.vue";
import AddPage from "./pages/addquiz.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [

    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/play',
      component: QuizPage,
    },
    {
      path: '/add',
      component  : AddPage,
    }
  ]


});
