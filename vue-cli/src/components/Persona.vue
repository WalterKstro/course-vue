// TEMPLATE
<template>
  <div class="content">
    <h3 v-text="filterData.name"></h3>
    <h3 v-text="filterData.email"></h3>
    <h3 v-text="filterData.location"></h3>
  </div>
</template>

// SCRIPT
<script>
import axios from "axios"

export default {

  mounted() {
    this.loadDataFromApi()
  },
  data() {
    return {
      persona: ""
    }
  },
  methods: {
    loadDataFromApi() {
      axios
        .get("https://randomuser.me/api/")
        .then(response => (this.persona = response.data.results))
        .catch(e => console.log(e));
    }
  },
  computed: {
    filterData() {
      return {
        name: `${this.persona[0].name.first} ${this.persona[0].name.last}`,
        email: this.persona[0].email,
        location: this.persona[0].location.country
      }
    }
  }
}
</script>

// ESTILOS
<style>
</style>