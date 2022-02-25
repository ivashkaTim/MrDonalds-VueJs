<template lang="pug">
  .b-modal
    overlay-component(
      v-on:click=""
    )
    cardProduct-component(
      v-on:click="onclick"
      :activeProduct ="activeProduct"
    )

</template>

<script>
import CardProduct from "@/components/blanks/CardProduct";
import Overlay from "@/components/blanks/Overlay";

export default {
  props: {
    activeProduct: Object
  },
  data() {
    return {}
  },
  methods: {
    onclick(count) {
      this.$emit('click', count)
    },

  },
  computed: {
  },
  components: {
    'cardProduct-component': CardProduct,
    'overlay-component': Overlay,
  },
}
</script>
