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

export default {
  name: 'App',
  components: {
    Header,
    AddEntryForm,
    Entries
  },
  data: () => ({
    //
  })
};
</script>

<style lang="less">
body {
  margin: 15px;
}
</style>