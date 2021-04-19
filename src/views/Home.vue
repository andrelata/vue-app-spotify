<template>
  <div class="home">
    <h1>Home</h1>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: "Welcome"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>