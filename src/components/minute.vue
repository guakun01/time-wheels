<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`minute-${index}`" :class="{hover: index===minute-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaMinute',
  props: ['minute'],
  computed: {
    liList() {
      return this.$t('minute')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.minute * 6)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 6;
    @for $i from 1 through 60 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 6deg}) translateX(320px);
      }
    }
  }
</style>
