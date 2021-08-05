<template>
  <div class="header">
    <Logo />
    <div class="settings">
      <div class="switch-direction">
        <v-btn-toggle v-model="siteDir" mandatory>
          <v-btn value="ltr">
            LTR
          </v-btn>

          <v-btn value="rtl">
            RTL
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="switch-lang">
        <LangSelector @changeLang="onChangeLang" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo';
import LangSelector from './LangSelector';

export default {
  name: 'Header',
  components: {
    Logo,
    LangSelector,
  },
  computed: {
    siteDir: {
      get() {
        return this.$store.state.sitedir;
      },
      set(value) {
        this.$store.commit('changeSiteDir', value);
      },
    },
    siteLang: {
      get() {
        return this.$store.state.sitelang;
      },
      set(value) {
        this.$store.commit('changeSiteLang', value);
      },
    },
  },
  methods: {
    onChangeLang(lang) {
      this.$store.commit('changeSiteLang', lang);
      this.i18n.locale = lang;
    },
  },
  watch: {
    siteDir(value) {
      document.body.dir = value;
      this.$vuetify.rtl = value === 'rtl';
    },
  },
};
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

  .settings {
    border-inline-start: 5px solid darkred;
    padding-inline-start: 10px;

    // this is for older browsers like IE
    // [dir="rtl"] & {
    //   border-right: 5px solid darkred;
    //   padding-right: 10px;
    // }

    // [dir="ltr"] & {
    //   border-left: 5px solid darkred;
    //   padding-left: 10px;
    // }
  }
}
</style>
