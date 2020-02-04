<template>
  <Article/>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  components: { Article },
  beforeRouteUpdate(to, from, next) {
    console.log(to.params.id);
    next();
  },
};
</script>

<style>

</style>
