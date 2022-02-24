<template lang="pug">
  .b-overlay(
    v-on:click="onClick"
  )
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    onClick(){
      this.$emit('click')
    }
  },
  computed: {},
  components: {},
}
</script>
