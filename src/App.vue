<template>
  <div class="home">
    <gua-second :second="second" />
  </div>
</template>

<script>
import GuaSecond from '@/components/second'
export default {
  name: 'app',
  components: {
    GuaSecond,
  }
}
</script>

<style lang="scss">

</style>
