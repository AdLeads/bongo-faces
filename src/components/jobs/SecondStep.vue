<template>
  <v-card>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Upload your logo image"
      prepend-icon="mdi-camera"
      v-model="logoImg"
    ></v-file-input>

    <!-- prepend-icon="mdi-code-tags-check" -->
    <v-combobox
      v-model="chips"
      :items="items"
      label="Select job tags"
      chips
      multiple
      clearable
      prepend-icon="mdi-code-tags-check"
    >
      <template v-slot:selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click="data.select"
          @click:close="remove(data.item)"
        >
          <v-avatar
            class="white--text"
            left
            color="primary"
            v-text="data.item.slice(0, 1).toUpperCase()"
          ></v-avatar>
          {{ data.item }}
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
    logoImg: null,
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
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
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
      let requirements = [];
      for (var i = 0; i < this.chips.length; i++) {
        requirements.push({
          name: this.chips[i],
          icon: "",
        });
      }
      // console.log(requirements);
      this.$emit("companyDescription", {
        requirements: requirements,
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