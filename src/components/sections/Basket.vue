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
            v-on:click="deleteProduct(item.id)"
          )
            img(src='@/assets/images/icons/delete.svg', alt="delete")
      .__total
        span.__total-name ИТОГО
        span.__total-name {{getTotalPriceAndCount.totalCount}}
        span.__total-name {{getTotalPriceAndCount.totalPrice}} ₽
      button-component.button--praimary.__button Оформить
</template>

<script>
import Button from "@/components/UI/Button";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    section: Object,
  },
  methods: {
    ...mapActions({
      deleteProduct:'products/deleteProduct'
    }),
    deleteItem(item) {
      item.count = 0
    }
  },
  computed: {
    ...mapGetters({
      sections: 'products/sections',
      filteredMenuItems:'products/filteredMenuItems',
      getTotalPriceAndCount: 'products/getTotalPriceAndCount',
    }),

  },
  components: {
    'button-component': Button
  },
}
</script>
