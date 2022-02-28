<template lang="pug">
  .b-modal
    overlay-component(
      v-on:click="closeCardProduct"
    )
    cardProduct-component

</template>

<script>
import CardProduct from "@/components/blanks/CardProduct";
import Overlay from "@/components/blanks/Overlay";
import {mapActions} from "vuex";

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      closeCardProduct: 'products/closeCardProduct',
    }),

  },
  computed: {},
  components: {
    'cardProduct-component': CardProduct,
    'overlay-component': Overlay,
  },
}
</script>
