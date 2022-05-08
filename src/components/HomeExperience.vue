<template>
  <div class="card-body" v-for="(experience) in experiences" :key="experience.id">
    <h5 class="card-title">
      {{ experience.title }}, {{ experience.name }}
    </h5>
    <h6 class="card-subtitle mb-2 text-muted">
      From {{ new Date(experience.start).toISOString().substring(0, 10) }}
      to {{ new Date(experience.end).toISOString().substring(0, 10) }}
    </h6>
    <p class="card-text">{{ experience.description }}</p>
  </div>
</template>

<script>
import {backendClient} from "@/services/backend";

export default {
  name: "HomeExperience",
  data() {
    return {
      experiences: []
    };
  },
  async created() {
    const {data} = await backendClient.get("/work-experience");
    this.experiences = data;
  }
}
</script>

<style scoped>

</style>