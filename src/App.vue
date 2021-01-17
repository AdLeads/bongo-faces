<template>
  <v-app>
    <v-app-bar app color="banner" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn color="primary" target="_blank" :loading="load" @click="postJob">
        <span class="mr-2">Post a Job</span>
        <v-icon>mdi-newspaper-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- publicity -->
      <br />
      <CardList></CardList>
    </v-main>
  </v-app>
</template>

<script>
import CardList from "./components/CardList";
export default {
  name: "App",

  components: {
    CardList,
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
