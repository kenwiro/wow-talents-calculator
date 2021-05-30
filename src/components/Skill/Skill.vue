<template>
    <div
      :class="skillClasses"
      @click="addPoint"
      @click.right="removePoint"
    >
      {{ talent.pointsInTalent }}
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import ConcreteTalent from "@/classes/Talent";

export default defineComponent({
  props: {
    talent: ConcreteTalent,
    pointsInSpec: Number,

  },
  computed: {
    skillClasses() {
      return {
        'calculator__skill': true,
        'calculator__skill--default': true,
        'calculator__skill--active': this.talent.pointsInTalent < this.talent.totalPoints,
        'calculator__skill--finished': this.talent.pointsInTalent === this.talent.totalPoints,
        'calculator__skill--disabled': !(this.pointsInSpec >= this.talent.needPointsInSpec) || !this.talent.isParentUnlocked(),
      }
    }

  },
  methods: {

    addPoint() {
      const isTalentCompleted = this.talent.pointsInTalent < this.talent.totalPoints;
      const isEnoughPointsInSpec = this.pointsInSpec >= this.talent.needPointsInSpec;
      const isDependencyParenUnlocked = this.talent.isHavingDependency() ? this.talent.isParentUnlocked() : true;

      if(isEnoughPointsInSpec && isTalentCompleted && isDependencyParenUnlocked) {
        const newValue = this.talent.addPoint();
        this.$emit('pointAdded', newValue);
      }
    },
    removePoint(e) {
      e.preventDefault();

      const talentIsNotEmpty = this.talent.pointsInTalent > 0;
      const isDependencyEmpty = this.talent.isHavingDependency() ? this.talent.pointsInDependency() === 0 : true;

      if(talentIsNotEmpty && isDependencyEmpty) {
        const newValue = this.talent.removePoint();
        this.$emit('pointRemoved', newValue);
      }
    }
  }
});
</script>

<style lang="scss">

  .calculator__skill {
    width: 38px;
    height: 38px;
    margin-top: 5px;
    border: 1px solid rgba(64,191,64,0.8);
    border-radius: 5px !important;
    user-select: none;
    background-color: lightgrey;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &--default {
    }
    &--active {
      background-color: green;
    }
    &--finished {
      border-color: #ffd100;
    }
    &--disabled {
      filter: grayscale(100%);
    }
  }

</style>