<template lang="pug">
  .b-products
    h2.__title {{title}}
    ul.__list
      li.__item(
      v-for="item in items"
      v-on:click="onClick(item.id)"
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
  methods: {
    onClick(id) {
      this.$emit('click', id)
    }
  },
  computed: {},
  components: {},
}
</script>
