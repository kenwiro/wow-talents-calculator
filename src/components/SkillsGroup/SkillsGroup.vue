<template>
  <div class="skills__group">
    <Skill
        :talent="talent"
        :pointsInSpec="pointsInSpec"
        @pointAdded="$emit('pointAdded')"
        @pointRemoved="$emit('pointRemoved')"
    />
    <div v-if="talent.dependency" :class="arrowClasses" >
    </div>
    <Skill
        v-if="talent.dependency"
        :talent="talent.dependency"
        :pointsInSpec="pointsInSpec"
        @pointAdded="$emit('pointAdded')"
        @pointRemoved="$emit('pointRemoved')"
    />
  </div>

</template>

<script>

import { defineComponent } from 'vue';
import Skill from '../Skill/Skill.vue';
import ConcreteTalent from "@/classes/Talent";

export default defineComponent({
  props: {
    pointsInSpec: Number,
    talent: ConcreteTalent,
  },
  components: { Skill },
  computed: {
    arrowClasses() {
      return {
        'skills__group__arrow': true,
        'skills__group__arrow--active': this.talent.dependency.isParentUnlocked()
      };
    },
  },
});
</script>

<style lang="scss">

  .skills__group {
    margin: 0 5px 0 5px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &__arrow {
      height: 82px;
      width: 12px;
      margin: auto;
      background-image: url('https://wow.zamimg.com/images/TalentCalc/arrows/down.png');
      background-repeat: no-repeat;
      background-position: bottom center;
      filter: grayscale(100%);

      &--active {
        filter: invert(79%) sepia(53%) saturate(2087%) hue-rotate(360deg) brightness(85%) contrast(85%);
      }
      & + .calculator__skill {
        margin-top: 0;
      }
    }
  }


</style>