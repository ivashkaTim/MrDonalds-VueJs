<template lang="pug">
  HomeView-component
</template>

<script>
  import HomeView from '@/components/pages/HomeView.vue'

  export default {
    data() {
     return {
       test: 2
     }
    },
    components: {
      'HomeView-component': HomeView
    }
  }
</script>
