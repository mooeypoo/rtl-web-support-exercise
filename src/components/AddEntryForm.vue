<template>
  <form action="#" class="form-addentry" ref="form">
    <h2>{{ $i18n('add_entry') }}</h2>
    <div>
      <label for="name">{{ $i18n('form_name') }}</label>
      <input type="text" name="name" />
    </div>
    <div class="handedness" dir="ltr">
      <div>
        <input
          type="radio"
          id="handedness_left"
          name="handedness"
          :value="$i18n('form_hand_left')"
        />
        <label for="handedness_left"
          ><bdi>{{ $i18n('form_hand_left') }}</bdi></label
        >
      </div>
      <div>
        <input
          type="radio"
          id="handedness_right"
          name="handedness"
          :value="$i18n('form_hand_right')"
        />
        <label for="handedness_right"
          ><bdi>{{ $i18n('form_hand_right') }}</bdi></label
        >
      </div>
    </div>
    <div>
      <label for="email">{{ $i18n('form_email') }}</label>
      <input type="email" name="email" dir="ltr" />
    </div>
    <div>
      <label for="message">{{ $i18n('form_message') }}</label>
      <textarea name="message" />
    </div>
    <v-btn color="primary" @click.stop="addEntry">
      Submit
    </v-btn>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AddEntryForm',
  methods: {
    addEntry(e) {
      // Serialize form data by input name => value
      const formData = new FormData(document.querySelector('form'));
      const obj = {};
      for (var key of formData.keys()) {
        obj[key] = formData.get(key);
      }

      e.preventDefault();

      if (!obj.name || !obj.message) {
        return;
      }

      // Add to store
      this.$store.commit('addEntry', obj);
    },
  },
  computed: {
    ...mapGetters({
      getSiteLang: 'getSiteLang',
    }),
  },
  watch: {
    getSiteLang(value) {
      this.i18n.locale = value;
    },
  },
};
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

  .handedness {
    display: flex;
    justify-content: space-between;
  }

  textarea,
  input:not([type='submit']):not([type='radio']) {
    vertical-align: top;
    border: 1px solid black;
    width: 100%;
  }

  input[type='email'] {
    [dir='rtl'] & {
      text-align: right;
    }
  }

  textarea {
    min-height: 150px;
    padding: 5px;
  }
}
</style>
