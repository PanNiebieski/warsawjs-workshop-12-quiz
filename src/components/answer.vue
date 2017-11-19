<template>
<div class="p-1">
  <button type="button"   class="btn btn-primary" >{{number}} :: {{a}}</button>
</div>



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
