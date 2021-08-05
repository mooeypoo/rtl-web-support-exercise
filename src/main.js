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
    language: 'Language:',
    form_name: 'Name:',
    form_email: 'Email:',
    form_hand_left: '← Left handed!',
    form_hand_right: 'Right handed! →',
    form_message: 'Message:',
    form_website: 'Website:'
  },
  he: {
    app_title: 'ללמוד עם ג\'ייסון: תמיכה בימין לשמאל',
    add_entry: 'הוספת רשומה',
    entries: 'רשומות',
    language: 'שפה:',
    form_name: 'שם:',
    form_email: 'אימייל:',
    form_hand_left: '← !שמאלי',
    form_hand_right: 'ימני! →',
    form_message: 'הודעה:',
    form_website: 'אתר:'
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
