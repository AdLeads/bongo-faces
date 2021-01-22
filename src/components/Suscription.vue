<template>
  <v-row align="center" justify="center">
    {{ text1 }}

    <v-select rounded :items="items" v-model="select"></v-select>

    {{ text2 }}

    <v-text-field rounded label="Email" append-icon="mdi-email"></v-text-field>
    <v-btn-toggle v-model="exclusive" shaped mandatory>
      <v-btn class="button-st" color="primary" @click="subscribe"
        >Subscribe</v-btn
      >
      <v-btn text @click="close">
        <v-icon color="secondary" :left="$vuetify.breakpoint.smAndUp">
          mdi-close
        </v-icon>
        <span class="hidden-xs-only"> Close </span>
      </v-btn>
    </v-btn-toggle>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    exclusive: 0,
    text1: "Receive",
    text2: "emails of new jobs",
    select: "Weekly",
    items: ["Weekly", "Daily"],
  }),
  mounted() {
    this.snackbar = true;
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    subscribe() {
      this.$vuetify.theme.dark = true;
    },
  },
};
</script>

<style scoped>
</style>