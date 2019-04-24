<template>
  <ul>
    {{second}}
    {{secondList}}
    <li></li>
  </ul>
</template>

<script>
export default {
  name: 'GuaSecond',
  props: ['second'],
  computed: {
    secondList: {
      get() {
        return this.$t('second')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
