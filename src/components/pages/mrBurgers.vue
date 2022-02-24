<template lang="pug">
  div
    header-component
    .b-main
      .container.__container
        basket-component
        .b-menu
          .__container
            .__banner
              img(src='images/utility/banner.png' alt="banner")
            section-products-component.__sections(
              v-for="(items, title) in sections"
              :key="title"
              :title="title"
              :items ="items"
              v-on:click="setActiveItem($event, title)"
            )
    overlay-component(
      v-if="activeItem"
      @click="onCloseCardProduct()"
    )
    card-product-component(
      v-if="activeItem"
      @click="changeCount"
    )

</template>

<script>
import Header from '@/components/sections/Header.vue'
import SectionProducts from "@/components/sections/Section-products";
import CardProduct from "@/components/blanks/Card-product";
import Basket from "@/components/sections/Basket";
import Overlay from "@/components/blanks/Overlay";
import menuItems, {changeActiveItem, closeCardProduct, changeActiveItemCount} from "@/services/menuItems";


export default {
  methods: {
    setActiveItem(event, title) {
      changeActiveItem(event, title)
    },
    onCloseCardProduct() {
      closeCardProduct()
    },
    changeCount(count){
      changeActiveItemCount(count)
      this.onCloseCardProduct()
    }
  },
  computed: {
    sections() {
      return menuItems.sections
    },
    activeItem() {
      return menuItems.activeItem
    },
  },
  components: {
    'header-component': Header,
    'section-products-component': SectionProducts,
    'card-product-component': CardProduct,
    'basket-component': Basket,
    'overlay-component': Overlay
  }
}
</script>

