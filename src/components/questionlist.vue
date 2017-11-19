<<template>
  <div class="list-group p-5">
      <a href="#" v-for="(item, index) in d" class="list-group-item"  v-bind:class="{ active: ind === index }" >pytanie {{index + 1}}</a>
  </div>
</template>


<script>

import answer from "./answer"

export default {
  name: "questionlist",
  props: ['d','ind'],
    data: function() {
    return {

    }
  },
  methods: {

  },

}

</script>
