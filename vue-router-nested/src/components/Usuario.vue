<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        idUser : this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>