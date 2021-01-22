<template>
  <div>
    <br />
    <v-card class="mx-auto" max-width="95%">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Company's information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 2" step="2">
            Describe your post
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3">
            Custom your post
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step
            :rules="[() => false]"
            :complete="e1 > 4"
            step="4"
          >
            Payment
            <small>Alert message</small>
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="5"> Preview </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <keep-alive>
              <FirstStep @valid="$event ? (e1 = 2) : (e1 = 1)"></FirstStep>
            </keep-alive>
          </v-stepper-content>

          <v-stepper-content step="2">
            <keep-alive>
              <SecondStep @valid="$event ? (e1 = 3) : (e1 = 1)"></SecondStep>
            </keep-alive>
          </v-stepper-content>

          <v-stepper-content step="3">
            <keep-alive>
              <ThirdStep @valid="$event ? (e1 = 4) : (e1 = 2)"></ThirdStep>
            </keep-alive>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="450px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="450px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1"> Finish </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
export default {
  data() {
    return {
      e1: 1,
      valid1: false,
    };
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
  },
  watch: {},
};
</script>

<style>
</style>