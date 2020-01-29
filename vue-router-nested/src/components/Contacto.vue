<template>
  <div>
     <h1>Contactanos</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab at accusamus fuga! Eveniet quo sunt a 
        corporis doloribus quae. Nihil veniam fugiat, natus quia iusto ipsam! Deleniti, quis minus?</p>

     <template v-if="estado">
        <h3>Newslater</h3>
         <form action="">
            <label for="correo">Correo</label>
            <input type="text" name="correo" id="correo">
         </form>
     </template>

  </div>
</template>

<script>
export default {
   props: [ 'estado'],
   data() {
      return {}
   },
}
</script>

<style>

</style>