<template>
  <div class="home">
    <gua-second :second="second" />
  </div>
</template>

<script>
import GuaSecond from '@/components/second'
export default {
  name: 'Home',
  components: {
    GuaSecond,
  },
  data() {
    return {
      second: '',
    }
  },
  created() {
    this.initApp()
  },
  methods: {
    initApp() {
      setInterval(() => {
        let thisMoment = new Date()
        this.second = thisMoment.getSeconds()
        console.log('这一秒: ', this.second, ' ')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; border: 0; min-height: 0; min-width: 0; }
*:focus { outline: none; }
body { overflow: hidden; background: #000; }
</style>
