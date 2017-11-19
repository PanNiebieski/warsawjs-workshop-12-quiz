<template>

<div class="container">
  <div>
    <div class="form-group row">
      <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Pytanie</label>
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-success" v-model="questions.text" id="inputHorizontalSuccess" placeholder="Twoje Pytanie">
        <!-- <div class="form-control-feedback">Success! You've done it.</div>
        <small class="form-text text-muted">Example help text that remains unchanged.</small> -->
      </div>
    </div>
    <div class="form-group row">
      <label for="inputHorizontalWarning" class="col-sm-2 col-form-label">Odpowiedź A</label>
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-warning" id="inputHorizontalWarning" v-model="questions.a" placeholder="Twoja Odpowiedź A">
        <!-- <div class="form-control-feedback">Shucks, check the formatting of that and try again.</div>
        <small class="form-text text-muted">Example help text that remains unchanged.</small> -->
      </div>
    </div>
    <div class="form-group row">
      <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Odpowiedź B</label>
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-danger" id="inputHorizontalDnger" v-model="questions.b" placeholder="Twoja  Odpowiedź B">
        <!-- <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
        <small class="form-text text-muted">Example help text that remains unchanged.</small> -->
      </div>
    </div>
        <div class="form-group row">
      <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Odpowiedź C</label>
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-danger" id="inputHorizontalDnger" v-model="questions.c" placeholder="Twoja Odpowiedź C">
        <!-- <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
        <small class="form-text text-muted">Example help text that remains unchanged.</small> -->
      </div>
    </div>
        <div class="form-group row">
      <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Odpowiedź D</label>
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-danger" id="inputHorizontalDnger" v-model="questions.d" placeholder="Twoja Odpowiedź D">
        <!-- <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
        <small class="form-text text-muted">Example help text that remains unchanged.</small> -->
      </div>
    </div>
    <button  v-on:click="submit()" class="btn-block btn-success btn">Zapisz</button>
  </div>
<div class="p-5">
      <router-link to="/" class="btn btn-info  btn-block ">Home</router-link>
</div>
  <div class="p-5">
    <pre>
      {{$data}}
    </pre>

  </div>
</div>

</template>


<script>

export default {
  name: "addquiz",
  data: function() {
    return {
      questions : {
        text: "",
        a : "",
        b : "",
        c : "",
        d : "",
      }

    }
  },
  methods : {
    submit() {

      let q = this.prepareQuizData();
      q = this.prepareQuizData();
      this.addQuiz(q);
    },
    addQuiz(quiz) {
      return this.$root.quizzes.push(quiz);
    },
    prepareQuizData() {
      return {
        questions : [
          {
            text: this.questions.question,
            answers : [
              this.questions.a,this.questions.b,this.questions.c,this.questions.d
            ],
            correctAnswerIndex : 2,
          },
        ],
      }
    }
  }
}



</script>

<style>


</style>
