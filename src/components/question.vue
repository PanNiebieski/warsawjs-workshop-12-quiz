<template>

  <div>
    <h2 class="p-5">{{d.text}}</h2>
     <ul class="list-group">
          <li v-for="(item, index) in d.answers" class="list-group-item">
                <answer :a="item" :number="index" v-on:click.native="selectAnswer(index)"></answer>
          </li>
      </ul>
  </div>

</template>


<script>

import answer from "./answer"

export default {
  name: "question",
  components: {
      'answer': answer,
  },
  props: ['d','currentQuestionIndex','f'],
    data: function() {
    return {

    }
  },
  methods: {
      selectAnswer(index) {
        if (index ===  this.d.correctAnswerIndex){

          this.$emit('selectCorrectAnswer');

        } else {

          this.$emit('selectIncorrectAnswer');
        }
      }
  },

}

</script>

<style>


</style>
