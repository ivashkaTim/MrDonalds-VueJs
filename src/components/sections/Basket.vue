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
        span.__total-name 5
        span.__total-name 750 ₽
      button-component.button--praimary.__button(
        v-on:click ="onClick(count)"
      ) Оформить
</template>

<script>
import menuItems from "@/services/menuItems";

export default {
  methods: {
    deleteItem(item) {
      item.count = 0
    }
  },
  computed: {
    filteredMenuItems() {
      const products = []
      Object.entries(menuItems.sections).forEach(([, items]) => {
        items.forEach(item => {
          if (item.count > 0) {
            products.unshift(item)
          }
        })
      })
      return products
    }
  },
  components: {},
}
</script>
