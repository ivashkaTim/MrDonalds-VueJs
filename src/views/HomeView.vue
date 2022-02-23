<template lang="pug">
  ToDoApp-component
</template>

<script>
  import ToDoApp from '@/components/pages/mrBurgers.vue'

  export default {
    data() {
     return {
       test: 2
     }
    },
    components: {
      'ToDoApp-component': ToDoApp
    }
  }
</script>
