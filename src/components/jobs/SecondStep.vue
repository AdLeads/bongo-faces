<template>
  <v-card>
    <v-select
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Select job tags"
      multiple
      prepend-icon="mdi-filter-variant"
      attach
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <!-- <v-icon left> {{ requirement.icon }} </v-icon> -->
          <strong>{{ item }}</strong>
        </v-chip>
      </template>
    </v-select>

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
      <v-btn class="mr-4" type="submit" color="primary" @click="submitData()">
        Continue
      </v-btn>
      <v-btn @click="back" color="secondary"> Back </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import steps from "../../mixins/steps";
export default {
  components: {},
  data: () => ({
    chips: [],
    sometext: true,
    description: "",
    items: [
      "Java",
      "Kotlin",
      "Dart",
      "Python",
      "Developer",
      "E-Commerce",
      "E-Business",
      "JavaScript",
      "AWS",
      "Senior",
      "React",
      "VueJs",
    ],
  }),
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    clear() {
      this.chips = [];
      this.description = "";
      this.sometext = true;
    },
    submitData() {
      this.$emit("companyDescription", {
        requirements: this.chips,
        description: this.description,
      });
      this.next();
    },
  },
  mixins: [steps],
  watch: {
    description() {
      if (this.description.length > 0) {
        this.sometext = false;
      }
    },
    chips() {
      if (this.chips.length > 0) {
        this.sometext = false;
      }
    },
  },
};
</script>

<style>
</style>