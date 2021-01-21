<template>
  <!-- <v-card class="mx-auto"> -->
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Company Name"
        rules="required|max:40"
      >
        <v-text-field
          v-model="name"
          :counter="40"
          :error-messages="errors"
          label="Company Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Company Email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="Company Email"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Job Title">
        <v-text-field
          v-model="title"
          :error-messages="errors"
          label="Job Title"
          required
        ></v-text-field>
      </validation-provider>
      <v-col>
        <v-row align="center" justify="center">
          <v-btn
            class="mr-4"
            type="submit"
            color="primary"
            :disabled="invalid"
            @click="next(invalid)"
          >
            Continue
          </v-btn>
          <v-btn @click="clear" color="secondary"> clear </v-btn>
        </v-row>
      </v-col>
      <!-- <v-btn color="primary" @click="e1 = 2"> Continue </v-btn> -->
      <!-- <v-btn text> Cancel </v-btn> -->
    </form>
  </validation-observer>
  <!-- </v-card> -->
</template>


<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    title: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    next(invalid) {
      if (invalid) {
        this.$emit("valid", true);
        // console.log(invalid + "2");
      }
    },
  },
};
</script>

<style>
</style>