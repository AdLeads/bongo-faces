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
      <v-btn color="primary" :loading="load" @click="loadJob">
        <v-icon>{{ icon }}</v-icon>
        <span class="mr-2"> {{ position ? "Post a Job" : "Back" }} </span>
      </v-btn>

      <!-- <v-btn color="primary" tile fab width="150px">
        <span class="mr-2">Post a Job</span>
        <v-icon>mdi-newspaper-plus</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <Suscription></Suscription>
    </v-main>
  </v-app>
</template>

<script>
import Suscription from "./components/Suscription";
export default {
  name: "App",

  components: {
    Suscription,
  },

  data: () => ({
    load: false,
    icon: "mdi-newspaper-plus",
    position: true,
  }),
  methods: {
    loadJob() {
      this.load = true;
      if (this.position) {
        this.icon = "mdi-keyboard-backspace";
        this.$router.push("/new-job");
      } else {
        this.icon = "mdi-newspaper-plus";
        this.$router.push("/");
      }
      this.position = !this.position;
      // this.$vuetify.theme.dark = true;
      this.load = false;
    },
  },
};
</script>
<style scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
