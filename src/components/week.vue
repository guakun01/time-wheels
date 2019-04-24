<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`week-${index}`" :class="{hover: index===week-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaWeek',
  props: ['week'],
  computed: {
    liList() {
      return this.$t('week')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.week * 51.428)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 3;
    @for $i from 1 through 7 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 51.428deg}) translateX(180px);
      }
    }
  }
</style>
