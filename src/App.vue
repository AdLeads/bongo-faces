<template>
  <v-app>
    <v-app-bar app color="banner" hide-on-scroll>
      <!-- <v-row align="center" justify="center">
        <v-col cols="12" sm="6" align="center"> </v-col>
        <v-col cols="12" sm="6" align="right"> </v-col>
      </v-row> -->
      <v-img
        class="mx-2"
        src="./assets/logo.png"
        max-height="80%"
        max-width="250px"
        contain
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn color="primary" target="_blank" :loading="load" @click="postJob">
        <span class="mr-2">Post a Job</span>
        <v-icon>mdi-newspaper-plus</v-icon>
      </v-btn>
      <!-- <v-btn color="primary" tile fab width="150px">
        <span class="mr-2">Post a Job</span>
        <v-icon>mdi-newspaper-plus</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-card class="mx-auto" max-width="90%" max-height="20px">
        <v-divider vertical></v-divider>
        Ads
        <!-- Ads -->
      </v-card>
      <br />
      <CardList></CardList>
      <Suscription></Suscription>
    </v-main>
  </v-app>
</template>

<script>
import CardList from "./components/CardList";
import Suscription from "./components/Suscription";
export default {
  name: "App",

  components: {
    CardList,
    Suscription,
  },

  data: () => ({
    load: false,
  }),
  methods: {
    postJob() {
      this.load = true;
      this.$vuetify.theme.dark = true;
    },
  },
};
</script>
