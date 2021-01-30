<template>
  <div>
    <!-- <v-card flat tile :color="card.type" :ripple="false"> -->
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" sm="2">
        <v-btn
          color="white"
          left
          fab
          :style="
            !isMobile() ? { left: '50%', transform: 'translateX(-95%)' } : {}
          "
          height="70px"
          width="70px"
        >
          <v-avatar size="65px">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="logo"
              contain
            ></v-img>
          </v-avatar>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="10">
        <h5>{{ name }}</h5>
        <h3>
          {{ title }}
        </h3>
        <v-chip label outlined color="secondary">
          <v-icon left> mdi-map-marker </v-icon>
          {{ country }}
        </v-chip>
      </v-col>
    </v-row>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    logo: {
      type: String,
      default: "https://picsum.photos/id/11/10/6"
    },
    name: {
      type: String,
      default: "No company name"
    },
    title: {
      type: String,
      default: "No title",
    },
    country: {
      type: String,
      default: "No country"
    },
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>