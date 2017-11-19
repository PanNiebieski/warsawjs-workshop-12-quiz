<template>
  <div id="app" class="container">
    <h1 class="my-5 text-center">{{title}}</h1>
    <my></my>
    <question :d="questions[currentQuestionIndex]"


    v-on:selectCorrectAnswer="advance"
    v-on:selectIncorrectAnswer="loose"


     ></question>
  </div>
</template>

<script>
import quizzesFile from "./data/quizzes.json"
import my from "./components/my"
import f from "./components/functions"
import question from "./components/question"

export default {
    name : 'app',
    components: {
      'my': my,
      'question' : question
    },
    data() {
      return {
        questions :quizzesFile.quizzes[0].questions,
        title : "warsawjs-workshop-12-quiz",
        currentQuestionIndex : 0,
      };
    },
    methods : {
      advance() {

        if (this.questions.length > this.currentQuestionIndex + 1) {
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
        }
        else {
          console.log('koniec');
        }

      },
      loose() {

      }
    },
    computed : {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
    },

};
</script>
