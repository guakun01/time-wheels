<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`day-${index}`" :class="{hover: index===day-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaDay',
  props: ['day'],
  computed: {
    liList() {
      return this.$t('day')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.day * 11.6129)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 2;
    @for $i from 1 through 31 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 11.6129deg}) translateX(120px);
      }
    }
  }
</style>
