<template>
  <div class="header">
    <Logo />
    <div class="switch-direction">
      <v-btn-toggle
        v-model="siteDir"
        mandatory
      >
        <v-btn value="ltr">
          LTR
        </v-btn>

        <v-btn value="rtl">
          RTL
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
import Logo from './Logo';

export default {
  name: 'Header',
  components: {
    Logo
  },
  computed: {
    siteDir: {
      get () {
        return this.$store.state.sitedir
      },
      set (value) {
        this.$store.commit('changeSiteDir', value)
      }
    },
  },
  methods: {
  },
  watch: {
    siteDir (value) {
      document.body.dir = value
      this.$vuetify.rtl = value === 'rtl'
    }
  }
}
</script>

<style lang="less">
.header {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 2px solid #9b1414;
  margin-bottom: 10px;

  .logo {
    flex-grow: 1;
  }
}
</style>