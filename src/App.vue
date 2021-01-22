<template>
  <v-app>
    <v-system-bar
      v-if="model"
      app
      color="#262626"
      class="px-4"
      dark
      height="58"
    >
      <v-spacer></v-spacer>
      <Suscription
        @close="$event ? (model = false) : (model = true)"
      ></Suscription>
    </v-system-bar>
    <v-app-bar app color="banner" hide-on-scroll>
      <!-- <router-link to="/"> -->
      <v-img
        class="mx-2"
        src="./assets/logo.png"
        max-height="80%"
        max-width="150px"
        contain
      >
      </v-img>
      <!-- </router-link> -->
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
      <!--      <Suscription></Suscription>-->
      <br />
    </v-main>

    <v-footer color="banner" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="banner py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Suscription from "./components/Suscription.vue";

export default {
  name: "App",

  components: {
    Suscription,
  },

  data: () => ({
    model: true,
    load: false,
    icon: "mdi-newspaper-plus",
    position: true,
    links: ["Home", "About Us", "Team", "Contact Us"],
    windowSize: {
      x: 0,
      y: 0,
    },
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
      this.load = false;
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 900) {
        this.model = false;
      }
    },
  },
  mounted() {
    this.onResize();
  },
  beforeMount() {
    // console.log(this.$route.fullPath + "s");
    if (this.$route.fullPath === "/") {
      this.position = true;
      this.icon = "mdi-newspaper-plus";
    } else {
      this.position = false;
      this.icon = "mdi-keyboard-backspace";
    }
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
