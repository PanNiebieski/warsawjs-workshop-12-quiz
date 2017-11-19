<template>

  <div>
    <p>{{d.text}}</p>
     <ul>
          <li v-for="(item, index) in d.answers">
                <answer :a="item" v-on:click.native="selectAnswer(index)"></answer>
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

          alert('Win');

        } else {
          alert('Lose');

        }
      }
  },



}

</script>

<style>


</style>
