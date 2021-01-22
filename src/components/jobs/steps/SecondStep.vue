<template>
  <v-card>
    <v-combobox
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Select job tags"
      multiple
      prepend-icon="mdi-filter-variant"
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong
          >&nbsp;
          <span>(interest)</span>
        </v-chip>
      </template>
    </v-combobox>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="description" color="primary">
          <template v-slot:label>
            <div>Description</div>
          </template>
        </v-textarea>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn @click="clear" color="white" :disabled="sometext"> Clear </v-btn>
    </v-row>
    <br />
    <v-row align="center" justify="center">
      <v-btn class="mr-4" type="submit" color="primary" @click="next()">
        Continue
      </v-btn>
      <v-btn @click="back" color="secondary"> Back </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    chips: [],
    sometext: true,
    description: "",
    items: [
      "Streaming",
      "Programming",
      "Playing video games",
      "Watching movies",
      "Sleeping",
      "Eating",
    ],
  }),
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    next() {
      this.$emit("valid", true);
    },
    back() {
      this.$emit("valid", false);
    },
    clear() {
      this.items = [];
      this.description = "";
      this.sometext = true;
    },
  },
};
</script>

<style>
</style>