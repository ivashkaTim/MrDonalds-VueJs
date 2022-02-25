<template lang="pug">
  .b-card-product
    .__image
      img(
        :src="`images/utility/${activeItem.image}.png`"
        alt='photo'
      )
    .__container
      .__info
        span {{activeItem.name}}
        span  {{activeItem.price}}₽
      .__count
        p Количество:
        .__form
          button-component.button--secondary.__button-count-plus(
            v-on:click="changeValue('minus')"
          ) -
          input.__input(
            type = 'number'
            v-model="count")
          button-component.button--secondary.__button-count-minus(
            v-on:click="changeValue('plus')"
          ) +
      .__total
        span Итоговая цена:
        span.__total-price {{totalPrice}} ₽
      button-component.button--praimary.__button(
        v-on:click ="onClick(count)"
      ) Добавить
</template>

<script>
import Button from "@/components/UI/Button";
import menuItems from "@/services/menuItems";

export default {
  data() {
    return {
      count: 1,
    }
  },
  props: {},
  methods: {
    onClick(count) {
      console.log(count, 'card')
      this.$emit('click', count)
    },
    changeValue(sign) {
      if (sign === 'minus' && this.count > 0) {
        this.count -= 1
      } else if (sign === 'plus') {
        this.count += 1
      }
    },
  },
  computed: {
    activeItem() {
      return menuItems.activeItem
    },
    totalPrice(){
      return this.count * this.activeItem.price
    }
  },
  components: {
    'button-component': Button,
  },
}
</script>
