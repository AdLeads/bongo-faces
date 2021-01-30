<template>
  <v-card class="mx-auto" max-width="70%" flat color="background">
    <v-container fluid>
      <v-row dense>
        <!-- <v-col cols="12">
          <v-card flat color="background">
            <v-card-subtitle>
              <v-btn @click="sortBy()">sort</v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col> -->
        <v-col cols="12">
          <h1>Lastest Job Posts</h1>
        </v-col>
        <v-col v-for="card in cards" :key="card.jobId" cols="12">
          <Job :card="card"></Job>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import json from "../external/files.json";
import axios from "axios";
import Job from "../components/Job";
export default {
  data: () => ({
    // cards: json,
    loadingData: true,
    cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
  components: {
    Job,
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios
        .get(this.url)
        .then((response) => {
          this.cards = response.data;
          console.log(this.cards);
          // this.loadingData = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    },
    sortBy() {
      this.cards.sort(this.GetSortOrder("title"));
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: bold;
  color: #040404;
}
</style>
