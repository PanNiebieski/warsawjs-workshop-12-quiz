<template>
  <div id="app" class="container">
    <h1 class="my-5 text-center" >{{title}}</h1>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
    name : 'app',
    components: {

    },
    data() {
      return {
        title : "warsawjs-workshop-12-quiz",
      };
    },

};
</script>
