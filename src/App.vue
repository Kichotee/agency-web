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
  overflow-x:hidden;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 0.5em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

}
 
::-webkit-scrollbar-thumb {
  background-color: linear-gradient(167deg, rgba(52,52,52,1) 0%, rgba(27,18,18,1) 48%, rgba(27,18,18,1) 81%, rgba(27,18,18,1) 100%);;      
;
  // outline: 1px solid slategrey;
}


</style>
