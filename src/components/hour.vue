<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`hour-${index}`" :class="{hover: index===hour-1 || index===hour-13}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaHour',
  props: ['hour'],
  computed: {
    liList() {
      return this.$t('hour')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.hour * 30)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 5;
    @for $i from 1 through 12 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 30deg}) translateX(270px);
      }
    }
  }
</style>
