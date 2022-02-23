<template lang="pug">
  div
    header-component
    .b-menu
      .container
        .__container
          .__banner
            img(src='images/utility/banner.png' alt="banner")
          section-products-component.__sections(
            v-for="(items, title) in sections"
            :key="title"
            :title="title"
            :items ="items"
          )
          card-product-component

</template>

<script>
import Header from '@/components/sections/Header.vue'
import SectionProducts from "@/components/sections/Section-products";
import CardProduct from "@/components/blanks/Card-product";


export default {
  data() {
    return {
      sections: {
        'Бурегры': [
          {id: 1, name: 'JS Burger', price: 250, image: 'JS'},
          {id: 2, name: 'Borsh Burger', price: 400, image: 'Borsh'},
          {id: 3, name: 'Freckles Burger', price: 350, image: 'Freckles'},
          {id: 4, name: 'Timon Burger', price: 150, image: 'Timon'},
          {id: 5, name: 'React Burger', price: 300, image: 'React'},
          {id: 6, name: 'Sun Burger', price: 200, image: 'Sun'},
        ],
        'Закуски/напитки': [
          {id: 1, name: 'Coka', price: 50, image: 'Coka'},
          {id: 2, name: 'Чайкофф', price: 70, image: 'Tea'},
          {id: 3, name: 'Лукошко Фри', price: 75, image: 'Free'},
          {id: 4, name: 'Нагиевцы', price: 100, image: 'Nag'},
          {id: 5, name: 'Кофе', price: 150, image: 'Coffe'},
          {id: 6, name: 'Гринч', price: 175, image: 'Grinch'},
        ],
      },
    }
  },
  methods: {},
  computed: {},
  components: {
    'header-component': Header,
    'section-products-component': SectionProducts,
    'card-product-component': CardProduct,
  }
}
</script>

