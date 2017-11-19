<template>
  <div>

    <div class="row"     v-if="!done">
      <div class="col-sm-4" >
          <list :d="questions" :ind="currentQuestionIndex"></list>
          <router-link to="/" class="btn btn-success btn-block">Home</router-link>
          <a class="btn btn-success btn-block" v-on:click="changeCourse()">Daj mi inny quiz</a>
      </div>
      <div class="col-sm-8" >
        <question :d="questions[currentQuestionIndex]"
        v-on:selectCorrectAnswer="advance"
        v-on:selectIncorrectAnswer="loose"

        ></question>

      </div>
    </div>
         <div  v-if="done">
           <h2>
            Graulacje
           </h2>
          <router-link to="/" class="btn btn-success  btn-block">Wroc</router-link>
          <a class="btn btn-success btn-block" v-on:click="changeCourse()">Daj mi inny quiz</a>
        </div>
  </div>
</template>

<script>
import quizzesFile from "../data/quizzes.json"
import f from "../components/functions"
import question from "../components/question"
import questionlist from "../components/questionlist"

export default {
    name : 'app',
    components: {
      'question' : question,
      'list' : questionlist
    },
    data() {
      return {
        currentQuizIndex : 0,
        quizes:quizzesFile.quizzes,
        questions :quizzesFile.quizzes[0].questions,
        title : "warsawjs-workshop-12-quiz",
        currentQuestionIndex : 0,
        done : false,
      };
    },
    methods : {
      advance() {

        if (this.questions.length > this.currentQuestionIndex + 1) {
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
        }
        else {
            this.done = true;
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
        }

      },
      loose() {
        this.currentQuestionIndex = 0;
      },
      changeCourse() {
        this.currentQuestionIndex = 0;
        this.done = false;
        if (this.quizes.length > this.currentQuizIndex   + 1) {
            this.currentQuizIndex = this.currentQuizIndex+ 1;

            this.questions = this.quizes[this.currentQuizIndex].questions;
        }
        else {
            this.currentQuizIndex = 0;
            this.questions = this.quizes[0].questions;
        }


      }
    },
    computed : {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
    },

};
</script>
<style>
h2 {
  text-align: center;
}

</style>
