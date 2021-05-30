<template>
  <div class="talents">
    <p>Free points: {{ talentCalculator.totalPoints }}</p>
    <p>Total points in specialization: {{ talentCalculator.specialization.pointsInSpec }}</p>
    <div class="calculator" style="background-image: url('https://rerollcdn.com/WOW/Calculator/Backgrounds/NEW/marksmanship_hunter.jpg')">
      <div v-for="(talentsGroup, index) in talentsGroups" :key="index" class="skills__row">
        <SkillsGroup
          v-for="talent in talentsGroup"
          :key="talent.id"
          :talent="talent"
          :pointsInSpec="talentCalculator.specialization.pointsInSpec"
          @pointAdded="addPoint"
          @pointRemoved="removePoint"
        />
      </div>

    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import SkillsGroup from "@/components/SkillsGroup/SkillsGroup";
import TalentCalculator from "@/classes/TalentCalculator";
import { HunterTalents } from "@/data/Hunter";

export default defineComponent({
  components: {
    SkillsGroup
  },
  data() {
    return {
      talentCalculator: new TalentCalculator(HunterTalents)
    };
  },
  computed: {
    talentsGroups() {
      return this.talentCalculator.specialization.talents.reduce((acc,el,i,arr) => i % 4 === 0 || i === 0 ? [...acc,  arr.slice(i,i+4)] : [...acc],[]);
    }
  },

  methods: {
    addPoint() {
      this.talentCalculator.specialization.addPointInSpec();
      this.talentCalculator.removePoint()
    },
    removePoint() {
      this.talentCalculator.specialization.removePointInSpec();
      this.talentCalculator.addPoint()
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
    width: 240px;
    height: 420px;
    background-color: lightblue;
    border: 1px solid black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

</style>