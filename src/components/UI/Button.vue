<template lang="pug">
  button.b-button(
    v-on:click ="onClick"
  )
    slot
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  computed: {},
  components: {},
}
</script>
