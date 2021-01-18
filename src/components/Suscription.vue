<template>
  <div>
    <v-snackbar v-model="snackbar" timeout="-1" bottom shaped>
      <template v-slot:action="{ attrs }">
        {{ text1 }}
        <v-select rounded :items="items" v-model="select"></v-select>
        {{ text2 }}
        <v-text-field
          rounded
          label="Email"
          append-icon="mdi-email"
        ></v-text-field>
        <v-btn-toggle v-model="exclusive" shaped mandatory>
          <v-btn color="primary">Suscribe</v-btn>
          <v-btn color="info" text v-bind="attrs" @click="snackbar = false">
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

<style>
</style>