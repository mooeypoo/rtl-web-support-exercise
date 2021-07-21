<template>
  <div class="logo">
    <v-avatar
      size="100"
    >
      <v-img
        src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_300,h_300,c_thumb,g_face,z_0.6/v1593462970/jason.af/jason-lengstorf-tokyo.jpg"
      />
    </v-avatar>
    {{ $i18n('app_title') }}
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>