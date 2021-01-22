<template>
  <div>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-container fill-height- fluid>
      <v-row v-if="link" no-gutters align="center" justify="center">
        <v-col cols="12" sm="4">
          <!-- <v-card class="pa-2" outlined tile></v-card> -->
        </v-col>
        <v-col cols="12" sm="4" align="center">
          <!-- <v-card class="pa-2" outlined tile> One of three columns </v-card> -->
          <v-btn elevation="2" medium color="primary" :to="link">Apply</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <!-- <v-card class="pa-2" outlined tile></v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["description", "link"],
};
</script>

<style>
</style>