<template>
  <div class="home">
    <Second :second="second" />
    <Minute :minute="minute" />
    <Hour :hour="hour" />
    <Apm :apm="apm" />
    <Week :week="week" />
    <Day :day="day" />
    <Month :month="month" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.home {
  ul {
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 60px;
    width: 60px;
    li {
      position: absolute;
      height: 60px;
      width: 60px;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
}

</style>
