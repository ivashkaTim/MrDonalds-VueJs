<template lang="pug">
  header.b-header
    .container.__container
      logo-component.__logo
      login-component.__login
</template>

<script>
import Logo from '@/components/blanks/Logo.vue'
import Login from '@/components/blanks/Login.vue'

export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'logo-component': Logo,
    'login-component': Login,


  }
}
</script>
