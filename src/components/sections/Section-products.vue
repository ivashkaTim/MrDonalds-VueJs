<template lang="pug">
  .b-products
    h2.__title {{title}}
    ul.__list
      li.__item(
      v-for="item in items"
      )
        .__text
          p {{item.name}}
          p {{item.price}} ₽
        img(
          :src="`images/utility/${item.image}.png`"
          alt='photo'
          )
</template>

<script>
export default {
  props: {
    section: Object,
    title: String,
    items: Array,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
}
</script>
