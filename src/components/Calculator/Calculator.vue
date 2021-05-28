<template>
  <div class="talents">
    <button @click.prevent="logCalc">123</button>
    <p>Total points: 51</p>
    <p>Free points: {{ freePoints }}</p>
    <div class="calculator" style="background-image: url('https://rerollcdn.com/WOW/Calculator/Backgrounds/NEW/marksmanship_hunter.jpg')">
      <div class="skills__row">
        <Skill v-for="talent in typedTalents" :key="talent.id" :talent="talent" @pointAdded="logCalc" />
      </div>

    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import Skill from '@/components/Skill/Skill';
import StandaloneTalent from '@/classes/standaloneTalent';

export default defineComponent({
  components: {
    Skill,
  },
  data() {
    return {

      totalPoints: 0,
      freePoints: 51,
      data: [
        {
          id: 1,
          name: 'qwe',
          description: 'sdfd',
          totalPoints: 5,
          dependency: null
        },
        {
          id: 2,
          name: 'dsds',
          description: 'jjj',
          totalPoints: 5,
          dependency: null
        },
        {
          id: 3,
          name: 'gdgfgf',
          description: 'jjjtrf',
          totalPoints: 5,
          dependency: {
            id: 4,
            name: 'depend',
            description: 'depend',
            totalPoints: 5,
            dependency: null
          }
        },
        {
          id: 5,
          name: 'qwe',
          description: 'sdfd',
          totalPoints: 3,
          dependency: null
        },
      ],
      typedTalents: []
    };
  },
  computed: {

  },
  mounted() {
    this.typedTalents = this.data.map((talent) => new StandaloneTalent(talent.id, talent.description, talent.totalPoints, talent.dependency));
  },
  methods: {
    logCalc(value) {
      // console.log(value);
    },
    countPoints() {
      ++this.totalPoints;
      --this.freePoints;
    },
    removePoint() {
      ++this.freePoints;
      --this.totalPoints;
    }
  }

});
</script>

<style lang="scss">

  .skills__row {
    justify-content: center;
    align-content: center;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .calculator {
    width: 300px;
    height: 500px;
    background-color: lightblue;
    border: 1px solid black;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

</style>