<template lang="pug">
  div
    header-component
    .b-main
      .container.__container
        basket-component(
        :section ="section"
        )
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
      v-if="activeProduct"
      :activeProduct="activeProduct"
      @click="changeCount"
    )

</template>

<script>
import Header from '@/components/sections/Header.vue'
import SectionProducts from "@/components/sections/SectionProducts";
import CardProduct from "@/components/blanks/CardProduct";
import Basket from "@/components/sections/Basket";
import Overlay from "@/components/blanks/Overlay";
import Modal from "@/components/sections/Modal";
import {mapGetters, mapMutations} from 'vuex';


export default {
  props: {},
  data() {
    return {
      section: {
        Burgers: [
          {id: 1, name: 'JS Burger', price: 250, image: 'JS', count:0},
          {id: 2, name: 'Borsh Burger', price: 400, image: 'Borsh', count:0},
          {id: 3, name: 'Freckles Burger', price: 350, image: 'Freckles', count:0},
          {id: 4, name: 'Timon Burger', price: 150, image: 'Timon', count:0},
          {id: 5, name: 'React Burger', price: 300, image: 'React', count:0},
          {id: 6, name: 'Sun Burger', price: 200, image: 'Sun', count:0},
        ],
        Snaks: [
          {id: 1, name: 'Coka', price: 50, image: 'Coka', count:0},
          {id: 2, name: 'Чайкофф', price: 70, image: 'Tea', count:0},
          {id: 3, name: 'Лукошко Фри', price: 75, image: 'Free', count:0},
          {id: 4, name: 'Нагиевцы', price: 100, image: 'Nag', count:0},
          {id: 5, name: 'Кофе', price: 150, image: 'Coffe', count:0},
          {id: 6, name: 'Гринч', price: 175, image: 'Grinch', count:0},
        ],
      },
      activeProduct: null
    }
  },

  methods: {
    setActiveItem(event, title) {
      this.activeProduct = this.section[title].find(item => item.id === event)
    },
    onclick(){
      console.log()
    },
    onCloseCardProduct() {
      this.activeProduct = null
    },
    changeCount(count){
      this.activeProduct.count +=count
        this.onCloseCardProduct()
    },
  },
  computed: {
    ...mapGetters(['sections']),

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

