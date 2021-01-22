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
import json from "../external/files.json";

// import axios from "axios";
import Card from "./Card.vue";
export default {
  data: () => ({
    cards: json,
    // cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
  components: {
    Card,
  },
  computed: {
    // fixItems() {
    //   this.fetchItems();
    //   this.cards.forEach((element) => {
    //     console.log(element);
    //     element.show = false;
    //   });
    //   console.log(this.cards);
    //   return;
    // },
  },
  methods: {
    fetchItems() {
      // axios
      //   .get(this.url)
      //   .then((response) => {
      //     this.cards = response.data;
      //     console.log(this.cards);
      //     this.expand = true;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    likePost(keyCard) {
      // console.log(keyCard);
      var found = this.cards.filter(function (item) {
        return item.key === keyCard;
      });

      // console.log("found", found[0]);
      console.log(this.cards.indexOf(found[0]));
      var i = this.cards.indexOf(found[0]);
      this.cards[i].likeColor = true;
      console.log(this.cards);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>
