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
.home {
  ul {
    list-style-type: none; padding: 0; position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto; height: 60px; width: 60px; transition: .1s .1s ease-in;
    li {
      position: absolute; height: 60px; width: 60px; color: #fff;
      text-align: center; font-size: 14px; line-height: 20px;
      &.hover {
        text-shadow: rgb(255, 255, 255) 0px 0px 10px,
        rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px,
        rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px,
        rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
      }
    }
  }
}
* { margin: 0; padding: 0; border: 0; min-height: 0; min-width: 0; }
*:focus { outline: none; }
body { overflow: hidden; background: #000; }
</style>
