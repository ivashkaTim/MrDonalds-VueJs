<template lang="pug">
  .b-card-product
    .__image
      img(
        :src="`images/utility/${activeProduct.image}.png`"
        alt='photo'
      )
    .__container
      .__info
        span {{activeProduct.name}}
        span  {{activeProduct.price}}₽
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
import Overlay from "@/components/blanks/Overlay";

export default {
  props: {
    activeProduct: Object
  },
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    onClick(count) {
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
    totalPrice() {
      return this.count * this.activeProduct.price
    }
  },
  components: {
    'button-component': Button,
    'overlay-components': Overlay,
  },
}
</script>
