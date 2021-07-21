<template>
  <div class="entries">
    <h2>{{ $i18n('entries') }}</h2>

    <div
      class="entry"
      v-for="(entry, index) in entries"
      :key="index"
    >
      <div class="entry-name">{{ entry.name }}</div>
      <div class="entry-email">{{ entry.email }}</div>
      <div class="entry-message">{{ entry.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entries',
  data: () => ({
  }),
  computed: {
    entries () {
      return this.$store.state.entries
    }
  }
}
</script>

<style lang="less">
.entries {
  margin: 0 auto;
  .entry {
    margin: 20px 0;

    &-name {
      font-weight: bold;
    }
  }
}
</style>