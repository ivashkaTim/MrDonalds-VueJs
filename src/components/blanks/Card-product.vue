<template lang="pug">
  .b-card-product
    .__image
      img(src='' alt='photo')
    .__container
      .__info
        span JS Burger
        span 250 ₽
      button-component.button--praimary.__button
</template>

<script>
import Button from "@/components/UI/Button";
export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'button-component': Button
  },
}
</script>
