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
            sectionProducts-component.__sections(
              v-for="(items, title) in sections"
              :key="title"
              :title="title"
              :items ="items"
              v-on:click="setActiveItem($event, title)"
            )
    modal-component(
      v-if="activeItem"
    )

</template>

<script>
import Header from '@/components/sections/Header.vue'
import SectionProducts from "@/components/sections/SectionProducts";
import CardProduct from "@/components/blanks/CardProduct";
import Basket from "@/components/sections/Basket";
import Overlay from "@/components/blanks/Overlay";
import menuItems, {changeActiveItem} from "@/services/menuItems";
import Modal from "@/components/sections/Modal";


export default {

  methods: {
    setActiveItem(event, title) {
      changeActiveItem(event, title)
    },
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
    'sectionProducts-component': SectionProducts,
    'cardProduct-component': CardProduct,
    'basket-component': Basket,
    'overlay-component': Overlay,
    'modal-component': Modal,
  }
}
</script>

