<template>
  <div>
    <Card :card="card"></Card>
    <br />
    <v-container fluid>
      <div align="center"><h3>Highlights</h3></div>
      <v-divider inset></v-divider>
      <v-radio-group v-model="highlight">
        <v-radio
          v-for="(high, index) in highlights"
          :key="index"
          :label="high.text"
          :value="high.value"
        ></v-radio>
      </v-radio-group>

      <div align="center"><h3>Sticky</h3></div>
      <v-divider inset></v-divider>

      <v-radio-group v-model="frontpage">
        <v-radio
          v-for="(front, index) in frontpages"
          :key="index"
          :label="front.text"
          :value="front.value"
        ></v-radio>
      </v-radio-group>

      <div align="center"><h3>More</h3></div>
      <v-divider inset></v-divider>

      <v-checkbox
        v-for="(option, index) in options"
        :key="index"
        v-model="option.value"
        :label="option.text"
      ></v-checkbox>
    </v-container>
    <br />
    <v-row align="center" justify="center">
      <v-btn class="mr-4" type="submit" color="primary" @click="next()">
        Continue
      </v-btn>
      <v-btn @click="back" color="secondary"> Back </v-btn>
    </v-row>
  </div>
</template>

<script>
import steps from "../../mixins/steps";
import Card from "../Card";
export default {
  props: ["card"],
  data: () => ({
    highlight: "hg-0",
    frontpage: "fp-0",
    options: [
      {
        text: "Show my ⭐️ company logo besides my post (+$49)",
        value: false,
      },
      {
        text:
          "Get matched with suitable applicants from our network of 6118 remote works",
        value: false,
      },
      {
        text:
          "Auto renew my job post and bump it to the frontpage after 30 days",
        value: false,
      },
    ],
    highlights: [
      {
        text: "Highlight your post in ⚠️ yellow (+$49)",
        value: "hg-1",
      },
      {
        text: "Highlight with your company's 🌈 brand color (+$499)",
        value: "hg-2",
      },
      {
        text: "None",
        value: "hg-0",
      },
    ],
    frontpages: [
      {
        text:
          "Sticky your post so it stays on 📌 top of the frontpage for ⏰ 24 hours (+$99)",
        value: "fp-1",
      },
      {
        text:
          "Sticky your post so it stays on 📌 top of the frontpage for 1 entire week (+$249)",
        value: "fp-2",
      },
      {
        text:
          "Sticky your post so it stays on 📌 top of the frontpage for 1 entire month (+$747)",
        value: "fp-3",
      },
      {
        text: "None",
        value: "fp-0",
      },
    ],
  }),
  components: {
    Card,
  },
  methods: {},
  mixins: [steps],
};
</script>

<style>
</style>