<template>
  <v-card class="mx-auto" max-width="90%">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.jobId" cols="12">
          <v-hover>
            <v-card :color="card.jobType">
              <v-row align="center" justify="center">
                <v-col cols="12" sm="3" align="center">
                  <v-card
                    max-height="150px"
                    max-width="150px"
                    class="rounded-card"
                  >
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      height="150px"
                      width="150px"
                      :src="card.logo"
                      position="center center"
                      @click="card.show = !card.show"
                    ></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-card-title>
                    {{ card.title }}
                    <v-spacer></v-spacer>
                    <Requirements :requirements="card.requirements">
                    </Requirements>
                  </v-card-title>
                  <v-card-subtitle>
                    {{ card.company }}
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-chip class="ma-2" label color="secondary"
                      >{{ card.country }}
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" text @click="card.show = !card.show">
                      {{ card.show ? "less" : "More" }}
                    </v-btn>
                    <!-- <v-btn
                      icon
                      @click="likePost(card.key)"
                      :color="card.likeColor ? 'red' : 'black'"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div v-show="card.show">
                  <v-divider></v-divider>
                  <Description
                    :description="card.description"
                    :link="card.link"
                  ></Description>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import json from "../external/files.json";

// import axios from "axios";
import Description from "./Description";
import Requirements from "./Requirements";
export default {
  data: () => ({
    cards: json,
    // cards: [],
    url: "https://bongo-engine-staging.herokuapp.com/posts",
  }),
  components: {
    Description,
    Requirements,
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
};
</script>
<style scoped>
.rounded-card {
  border-radius: 125px;
}
</style>
