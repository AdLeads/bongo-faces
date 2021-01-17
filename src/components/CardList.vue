<template>
  <v-card class="mx-auto" max-width="90%">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.key" :cols="card.flex">
          <v-card>
            <v-card-title
              >{{ card.title }}
              <v-spacer></v-spacer>
              <div>
                <v-chip
                  class="ma-2"
                  :color="requirement.color"
                  v-for="(requirement, i) in card.requirements"
                  :key="i"
                  outlined
                >
                  <v-icon left> {{ requirement.icon }} </v-icon>
                  {{ requirement.name }}
                </v-chip>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" text @click="card.show = !card.show">
                MORE
              </v-btn>
              <!-- <v-btn
                icon
                @click="likePost(card.key)"
                :color="card.likeColor ? 'red' : 'black'"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
            </v-card-actions>

            <v-expand-transition>
              <div v-show="card.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ card.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import json from "../external/files.json";
// import axios from "axios";

export default {
  data: () => ({
    cards: json,
    // cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
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
};
</script>
