<!--
<template>
  <div class="container">
    <section v-if="tipo=='section'"><slot></slot></section>
    <article v-if="tipo=='article'"><slot></slot></article>
    <footer v-if="tipo=='footer'"><slot></slot></footer>
    <header v-if="tipo=='header'"><slot></slot></header>
  </div>
</template>


-->
<script>
export default {
  props:{
    tipo:{
      type:String,
      required:true
    }
  },
  render(createElement){
    return createElement(this.tipo,this.$slots.default)
  }
}
</script>

<style>

</style>