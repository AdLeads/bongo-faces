<template>
  <div>
    <v-snackbar v-model="snackbar" timeout="-1" bottom shaped>
      <template v-slot:action="{ attrs }">
        <h6 class="text-se">
          {{ text1 }}
        </h6>
        <v-select
          rounded
          :items="items"
          v-model="select"
          class="text-se"
        ></v-select>
        <h6 class="text-se">
          {{ text2 }}
        </h6>
        <v-text-field
          class="text-se"
          rounded
          label="Email"
          append-icon="mdi-email"
        ></v-text-field>
        <v-btn-toggle v-model="exclusive" shaped mandatory>
          <v-btn class="button-st" color="primary">Suscribe</v-btn>
          <v-btn
            class="button-st"
            color="info"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    exclusive: 0,
    snackbar: false,
    text1: "Receive",
    text2: "emails of new jobs",
    select: "Weekly",
    items: ["Weekly", "Daily"],
  }),
  mounted() {
    this.snackbar = true;
  },
};
</script>

<style scoped>
.text-se {
  font-size: 10px;
}
.button-st {
  font-size: 15px;
}
</style>