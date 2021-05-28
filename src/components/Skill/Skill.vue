<template>
  <div class="skill__groups">
    <div
      :class="skillClasses"
      @click="addPoint"
      @click.right="removePoint"
    >
      {{ talent.pointsInTalent }}
    </div>

    <Skill v-if="talent.dependency" :talent="talent.dependency" @pointAdded="depPointAdded"></Skill>
  </div>

</template>

<script>

import { defineComponent } from 'vue';
import StandaloneTalent from '@/classes/standaloneTalent';
import Skill from './Skill';

export default defineComponent({
  props: {
    talent: StandaloneTalent,
    maxCount: Number,
    pointsToUnlock: Number,
    totalPoints: Number
  },
  components: { Skill },
  computed: {
    skillClasses() {
      return {
        'calculator__skill': true,
        'calculator__skill--default': true,
        'calculator__skill--active': this.talent.pointsInTalent < this.talent.totalPoints,
        'calculator__skill--finished': this.talent.pointsInTalent === this.talent.totalPoints,
        'calculator__skill--disabled': !this.talent.isParentUnlocked(),
      }
    }

  },
  methods: {
    depPointAdded(newValue) {
      this.$emit('pointAdded', newValue);
    },

    addPoint() {
      if(this.talent.pointsInTalent < this.talent.totalPoints && this.talent.isParentUnlocked()) {
        const newValue = this.talent.addPoint();
        this.$emit('pointAdded', newValue);
      }
    },
    removePoint(e) {
      e.preventDefault();
      if(this.points > 0 && this.pointsToUnlock <= this.talent.totalPoints) {
        --this.points;
        this.$emit('pointRemoved');
      }
    }
  }
});
</script>

<style lang="scss">

  .skill__groups {
    margin: 5px 5px 5px 5px;
  }

  .calculator__skill {
    width: 60px;
    height: 60px;
    margin: 5px 5px 5px 5px;
    user-select: none;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &--default {
      background-color: lightgrey;
    }
    &--active {
      background-color: green;
    }
    &--finished {
      background-color: gold;
    }
    &--disabled {
      background-color: gray;
    }
  }

</style>