<template>



    <div v-for="talent in compositeTalents" :key="talent.id" class="skills__row">
      <Skill />
      <SkillsRow :talents="talent.children"></SkillsRow>
    </div>

    <Skill v-for="talent in basicTalents" :key="talent.id" />




</template>

<script lang="ts">
import Skill from "@/components/Skill/Skill.vue";
import SkillsRow from './SkillsRow'
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    talents: Array
  },
  components: {
    Skill,
    SkillsRow
  },
  computed: {
    compositeTalents() {
      return this.talents.filter(talent => talent.isComposite())
    },
    basicTalents() {
      return this.talents.filter(talent => !talent.isComposite())
    }
  }
});
</script>

<style scoped lang="scss">

</style>
