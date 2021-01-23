<template>
  <v-app>
    <v-app-bar app color="banner" hide-on-scroll>
      <v-img
        class="mx-2"
        src="./assets/logo.png"
        max-height="80%"
        max-width="150px"
        contain
      >
      </v-img>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <br />
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <br />
    </v-main>

    <v-footer color="banner" padless>
      <v-row justify="center" no-gutters>
        <v-col class="banner py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
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
