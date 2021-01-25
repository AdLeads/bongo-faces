<template>
  <v-card class="mx-auto" max-width="70%" flat color="background">
    <h1>Lastest Job Posts</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.jobId" cols="12">
          <Job :card="card"></Job>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import json from "../external/files.json";
// import axios from "axios";
import Job from "../components/Job.vue";
export default {
  data: () => ({
    cards: json,
    loadingData: true,
    // cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
  components: {
    Job,
  },
  // mounted() {
  //   this.fetchItems();
  // },
  // methods: {
  //   fetchItems() {
  //     axios
  //       .get(this.url)
  //       .then((response) => {
  //         this.cards = response.data;
  //         console.log(this.cards);
  //         // this.loadingData = false;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>
<style scoped>
h1 {
  font-weight: bold;
  color: #040404;
}
</style>
