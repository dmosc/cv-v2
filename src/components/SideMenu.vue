<template>
  <ul class="border-right border-primary">
    <router-link to="/" class="nav-item main-menu-item">
      dmosc
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "SideMenu",
}
</script>

<style scoped>
.main-menu-item {
  width: 100%;
  text-align: center;
  text-decoration: none;
}

.main-menu-item:hover {
  cursor: pointer;
  background-color: blue;
  color: white;
}
</style>