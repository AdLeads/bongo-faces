<template>
  <v-card :color="card.type">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="2" align="center">
        <v-hover>
          <v-avatar size="150px" color="white">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="card.logo"
              height="150px"
              class="images-cs"
              @click="show = !show"
            ></v-img>
          </v-avatar>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="10">
        <v-card-title>
          {{ card.title }}
          <v-spacer></v-spacer>
          <Requirements :requirements="card.tags"> </Requirements>
        </v-card-title>
        <v-card-subtitle>
          {{ card.companyName }}
        </v-card-subtitle>

        <v-card-actions>
          <v-chip class="ma-2" label color="secondary"
            >{{ card.country }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="show = !show">
            {{ show ? "less" : "More" }}
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
      <div v-show="show">
        <v-divider></v-divider>
        <Description
          :description="card.description"
          :link="card.link"
        ></Description>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Description from "./Description";
import Requirements from "./Requirements";
export default {
  props: ["card"],
  components: {
    Description,
    Requirements,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50%;
  background-size: cover;
}
.image-cs {
  border-radius: 0%;
}
</style>