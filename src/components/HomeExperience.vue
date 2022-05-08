<template>
  <div class="card-body" v-for="(experience) in experiences" :key="experience.id">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column">
        <h5 class="card-title">
          {{ experience.title }},
          <span :style="`color: ${experience.color}; font-weight: bolder;`">{{ experience.company }}</span>
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">
          From {{ new Date(experience.start).toISOString().substring(0, 10) }}
          to {{ new Date(experience.end).toISOString().substring(0, 10) }}
        </h6>
        <h6
            class="card-subtitle mb-2 text-muted"
            data-toggle="modal"
            data-target="#team-modal"
            @click="currentTeam = { team: experience.team, description: experience.team_description }"
        >
          <u>{{ experience.team }}</u>
        </h6>
      </div>
      <img :src="experience.ipfs_cid" class="rounded float-start d-none d-md-block" alt="..." style="height: 50px;">
    </div>
    <p class="card-text">{{ experience.work_description }}</p>
    <div class="modal fade" id="team-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            {{ currentTeam?.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {backendClient} from "@/services/backend";
import IPFS from "@/utils/ipfs";

export default {
  name: "HomeExperience",
  data() {
    return {
      currentTeam: undefined,
      experiences: []
    };
  },
  async created() {
    const {data} = await backendClient.get("/work-experience");
    this.experiences = data.map((experience) => {
      experience.ipfs_cid = IPFS.cidToUrl(experience.ipfs_cid);
      return experience;
    });
  }
}
</script>

<style scoped>
</style>