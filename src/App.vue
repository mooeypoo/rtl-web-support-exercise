<template>
  <v-app>
    <Header />
    <AddEntryForm />
    <Entries />
  </v-app>
</template>

<script>
import Header from './components/Header';
import AddEntryForm from './components/AddEntryForm';
import Entries from './components/Entries';
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    AddEntryForm,
    Entries
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      getSiteLang: 'getSiteLang'
    })
  },
  watch: {
    getSiteLang (value) {
      this.i18n.locale = value
    }
  }
};
</script>

<style lang="less">
body {
  margin: 15px;
}
</style>