<template>
  <ul class="list-group list-group-flush">
    <router-link to="/" class="list-group-item list-group-item-link">
      dmosc
    </router-link>
    <router-link to="/experiences" class="list-group-item list-group-item-link">
      experiences
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "SideMenu",
}
</script>

<style scoped>
.list-group-item-link {
  text-align: center;
  text-decoration: none;
}

.list-group-item-link:hover {
  cursor: pointer;
  font-weight: bolder;
}
</style>