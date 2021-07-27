<template>
  <form action="#" class="form-addentry" ref="form">
    <h2>{{ $i18n('add_entry') }}</h2>
    <div>
      <label for="name">{{ $i18n('form_name') }}</label>
      <input type="text" name="name" />
    </div>
    <div>
      <input type="radio" id="handedness_left" name="handedness" :value="$i18n('form_hand_left')">
      <label for="handedness_left">{{ $i18n('form_hand_left') }}</label>
      <input type="radio" id="handedness_right" name="handedness" :value="$i18n('form_hand_right')">
      <label for="handedness_right">{{ $i18n('form_hand_right') }}</label>
    </div>
    <div>
      <label for="email">{{ $i18n('form_email') }}</label>
      <input type="text" name="email" />
    </div>
    <div>
      <label for="message">{{ $i18n('form_message') }}</label>
      <textarea name="message" />
    </div>
    <v-btn
      color="primary"
      @click.stop="addEntry"
    >
      Submit
    </v-btn>
  </form>
</template>

<script>
export default {
  name: 'AddEntryForm',
  methods: {
    addEntry (e) {
      const formData = new FormData(document.querySelector('form'))
      const obj = {};
      for (var key of formData.keys()) {
        obj[key] = formData.get(key);
      }

      e.preventDefault()

      if (!obj.name || !obj.message) {
        return
      }

      this.$store.commit('addEntry', obj)
    }
  }
}
</script>

<style lang="less">
.form-addentry {
  margin: 20px auto;

  > div {
    clear: both;
    margin: 10px 0;

    label {
      margin-right: 15px;
    }
  }

  textarea,
  input:not([type="submit"]) {
    vertical-align: top;
    border: 1px solid black;
  }
}
</style>