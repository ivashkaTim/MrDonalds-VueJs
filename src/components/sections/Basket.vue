<template lang="pug">
  .b-basket
    .__container
      h2.__title ваш заказ
      p.__subtitle(
        v-if="!filteredMenuItems.length"

      ) Вы еще ничего не выбрали
      table.__list(
        v-else
      )
        tr.__item(
          v-for="item in filteredMenuItems"
        )
          td.__name {{item.name}}
          td.__count {{item.count}}
          td.__price {{item.price * item.count}} ₽
          td.__image(
            v-on:click="deleteItem(item)"
          )
            img(src='@/assets/images/icons/delete.svg', alt="delete")
      .__total
        span.__total-name ИТОГО
        span.__total-name {{changeTotalPrice.totalCount}}
        span.__total-name {{changeTotalPrice.totalPrice}} ₽
      button-component.button--praimary.__button(
        v-on:click ="onClick"
      ) Оформить
</template>

<script>
import Button from "@/components/UI/Button";

export default {
  props: {
    section: Object,
  },
  methods: {
    onClick() {
      console.log(this.section)
    },
    deleteItem(item) {
      item.count = 0
    }
  },
  computed: {

    filteredMenuItems() {
      const products = []
      Object.entries(this.section).forEach(([, items]) => {
        items.forEach(item => {
          if (item.count > 0) {
            products.unshift(item)
          }
        })
      })
      return products
    },

    changeTotalPrice() {
      const total = {
        totalCount: 0,
        totalPrice: 0,
      }
      this.filteredMenuItems.forEach(item => {
        total.totalCount += item.count
        total.totalPrice += (item.count * item.price)
      })
      return total
    },
  },
  components: {
    'button-component': Button
  },
}
</script>
