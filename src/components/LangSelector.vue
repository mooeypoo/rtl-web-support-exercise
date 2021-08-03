<template>
  <div class="langselector">
    <v-select
      v-model="select"
      :items="locales"
      item-text="autonym"
      item-value="code"
      :label="$i18n('language')"
    >
    </v-select>
  </div>
</template>

<script>
// Adapted from https://codesandbox.io/s/vue-banana-i18n-example-ootiv
export default {
  name: "LangSelector",
  data: () => ({
    select: { code: 'en', autonym: 'English' },
    locales: [
      { code: "en", autonym: "English" },
      { code: "he", autonym: "Hebrew" }
    ]
  }),
  watch: {
    select (value) {
      this.$emit("changeLang", value);
      this.i18n.locale = value;
    }
  }
};
</script>