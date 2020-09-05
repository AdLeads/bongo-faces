<template>
  <v-card class="mx-auto" max-width="1250px">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.key" :cols="card.flex">
          <v-card>
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-text v-text="card.description"></v-card-text>
            <!-- Start Actions -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
            <!-- End Actions -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import json from "../external/files.json";
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    // cards: json,
    cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
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
