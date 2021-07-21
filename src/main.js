import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from 'vue-banana-i18n'
import vuetify from './plugins/vuetify'

const INTERFACE_LANG = 'en'
const messages = {
  en: {
    app_title: 'Learning With Jason: RTL Support',
    add_entry: 'Add entry',
    entries: 'Entries',
    form_name: 'Name:',
    form_email: 'Email:',
    from_message: 'Message:',
    from_website: 'Website:'
  },
  he: {
    app_title: 'ללמוד עם ג\'ייסון: תמיכה בימין לשמאל',
    add_entry: 'הוספת רשומה',
    entries: 'רשומות',
    form_name: 'שם:',
    form_email: 'אימייל:',
    from_message: 'הודעה:',
    from_website: 'אתר:'
  }
}

Vue.use(i18n, {
  locale: INTERFACE_LANG,
  messages: messages
})

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
