<template>
  <v-card class="mx-auto" max-width="90%">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.jobId" cols="12">
          <Card :card="card"></Card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import json from "../external/files.json";
import axios from "axios";
import Card from "../components/Card.vue";
export default {
  data: () => ({
    // cards: json,
    cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
  components: {
    Card,
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
          this.expand = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>
