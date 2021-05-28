<template>
  <div class="home">
    <Calculator></Calculator>
  </div>
</template>

<script lang="ts">

import Calculator from '../components/Calculator/Calculator.vue'
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  data() {
    return {
      kek: 123
    }
  },

  components: {
    Calculator
  },
  computed: {

  },
  methods: {
  }
});
</script>
