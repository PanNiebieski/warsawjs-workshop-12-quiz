<template>
  <div>

    <div class="row">
      <div class="col-sm-4" >
          <list :d="questions[currentQuestionIndex]" :ind="currentQuestionIndex"></list>

      </div>
      <div class="col-sm-8" >
        <question :d="questions[currentQuestionIndex]"
        v-on:selectCorrectAnswer="advance"
        v-on:selectIncorrectAnswer="loose"
        v-if="!done"
        ></question>
           <div  v-if="done">Graulacje</div>
      </div>
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
      }
    },
    computed : {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
    },

};
</script>
