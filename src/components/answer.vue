<template>

  <button type="button"  class="btn btn-primary btn-block" >{{a}}</button>




</template>


<script>

export default {
  name: "answer",
  props: ['a','number'],
  data: function() {
    return {
      test : "Inny narzędzie"
    }
  }
}

</script>

<style>


</style>
