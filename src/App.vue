<template>
  
  <router-view/>
</template>
<script>
import HomeView from './views/HomeView.vue'
export default {
  components:{
    HomeView
  }
}
</script>

<style lang="scss">
$light-color: #f4f4f4;
$primary-color: #0e6cff;
$secondary-color:#ff8700;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  height: auto;
  // overflow-x:hidden;
  color: #2c3e50;
}


</style>
