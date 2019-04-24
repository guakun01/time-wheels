<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`apm-${index}`" :class="{hover: index===apm-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaApm',
  props: ['apm'],
  computed: {
    liList() {
      return this.$t('apm')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.apm * 60)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 4;
    @for $i from 1 through 2 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 60deg}) translateX(230px);
      }
    }
  }
</style>
