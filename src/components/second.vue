<template>
  <ul :style="secondStyles">
    <li v-for="(item, index) in secondList" :key="`second-${index}`" :class="{hover: index===second-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaSecond',
  props: ['second'],
  computed: {
    secondList() {
      return this.$t('second')
    },
    secondStyles() {
      return {
        transform: `rotate(${-(this.second * 6)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  @for $i from 1 through 60 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 6deg}) translateX(390px);
    }
  }
}
</style>
