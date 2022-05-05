<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <SideMenu/>
      </div>
      <div class="col-sm-6">
        <div class="card middle-container">
          <router-view/>
        </div>
      </div>
      <div class="col-sm">
        <PresentationCard/>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import PresentationCard from "@/components/PresentationCard";

export default {
  name: 'LayoutContainer',
  components: {PresentationCard, SideMenu},
  data() {
    return {
      currentViewId: "home",
      guestName: undefined,
      hobbies: [
        {
          name: "Investing",
          description:
              "I enjoy reading about financial markets in my spare time. I've been trading stocks and cryptocurrencies for the past couple of years."
        },
        {
          name: "Reading",
          description:
              "I try to read every single day. I've incorporated this practise in my life for almost 5 years now and it has been a very rewarding investment."
        },
        {
          name: "Exercising",
          description:
              "I exercise often in the gym. After a long programming session, going out to stretch my legs helps me empty my cognitive buffer and recharge myself."
        }
      ]
    }
  }
}
</script>

<style scoped>
.middle-container {
  width: 100%;
  text-align: left;
}
</style>