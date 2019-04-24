<template>
  <ul :style="ulStyles">
    <li v-for="(item, index) in liList" :key="`month-${index}`" :class="{hover: index===month-1}">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuaMonth',
  props: ['month'],
  computed: {
    liList() {
      return this.$t('month')
    },
    ulStyles() {
      return {
        transform: `rotate(${-(this.month * 30)}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    z-index: 1;
    @for $i from 1 through 12 {
      li:nth-child(#{$i}) {
        transform: rotate(#{$i * 30deg}) translateX(60px);
      }
    }
  }
</style>
