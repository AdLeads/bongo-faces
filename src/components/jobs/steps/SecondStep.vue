<template>
  <v-card>
    <validation-provider v-slot="{ errors }" name="select" rules="required">
      <v-select
        v-model="select"
        :items="items"
        :error-messages="errors"
        label="Select"
        data-vv-name="select"
        required
      ></v-select>
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="phoneNumber"
      :rules="{
        required: true,
        digits: 7,
        regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
      }"
    >
      <v-text-field
        v-model="phoneNumber"
        :counter="7"
        :error-messages="errors"
        label="Phone Number"
        required
      ></v-text-field>
    </validation-provider>
    <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
      <v-checkbox
        v-model="checkbox"
        :error-messages="errors"
        value="1"
        label="Option"
        type="checkbox"
        required
      ></v-checkbox>
    </validation-provider>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>