<template id="app">
    <LayoutContainer />
</template>

<script>
import LayoutContainer from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    LayoutContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
