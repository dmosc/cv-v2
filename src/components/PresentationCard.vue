<template>
  <div class="card mb-4 mb-md-0">
    <img
        src="static/nft-min.jpg"
        class="card-img-top d-none d-md-block"
        alt="Profile picture"
    />
    <div class="card-body">
      <h5 class="card-title">
        <a href="https://github.com/dmosc" target="_blank" rel="noreferrer noopener">
          Oscar Moscosa
        </a>
      </h5>
      <p class="card-text">
        Javascript engineer. Passionate about web3 and building
        solutions to secure the world with mathematics.
      </p>
    </div>
    <SideMenu/>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "PresentationCard",
  components: {SideMenu}
}
</script>

<style scoped>

</style>