<template>
  <div>
    <v-chip
      class="ma-2"
      :color="requirement.color"
      v-for="(requirement, i) in requirements"
      :key="i"
      outlined
      label
    >
      <!-- <v-icon left> {{ requirement.icon }} </v-icon> -->
      <!-- {{ requirement.name }} -->
      {{ requirement }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: ["requirements"],
};
</script>

<style>
</style>