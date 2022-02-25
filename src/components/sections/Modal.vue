<template lang="pug">
  .b-modal
    overlay-component(
      v-on:click="onCloseCardProduct"
    )
    cardProduct-component(
      v-on:click="changeCount"
    )

</template>

<script>
import menuItems, {closeCardProduct, changeActiveItemCount} from "@/services/menuItems";
import CardProduct from "@/components/blanks/CardProduct";
import Overlay from "@/components/blanks/Overlay";

export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    onCloseCardProduct() {
      closeCardProduct()
    },
    changeCount(count){
        changeActiveItemCount(count)
        this.onCloseCardProduct()
    },
  },
  computed: {
    activeItem() {
      return menuItems.activeItem
    },
  },
  components: {
    'cardProduct-component': CardProduct,
    'overlay-component': Overlay,
  },
}
</script>
