<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-center">
      <div class="col-md-4">
        <PresentationCard/>
      </div>
      <div class="col">
        <div class="card middle-container">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PresentationCard from "@/components/PresentationCard";

export default {
  name: 'LayoutContainer',
  components: {PresentationCard},
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