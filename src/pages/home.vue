<template>
<div >
  <h2 class="p-2">{{test}}</h2>
  <router-link to="/" class="btn btn-info  btn-block">Home</router-link>
  <router-link to="/play" class="btn btn-info  btn-block ">Quiz</router-link>
  <router-link to="/add" class="btn btn-info  btn-block ">Dodaj Quiz</router-link>

</div>

</template>


<script>

export default {
  name: "my",
  data: function() {
    return {
      test : "Witaj na stronie"
    }
  }
}

</script>

<style>
h2 {
  text-align: center;
}

</style>
