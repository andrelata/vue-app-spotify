<template>
  <div class="categories">
    <h1>Categories</h1>
    <div v-for="item in categories" :key="item.id">
      <img  :src="item.icons.url" 
            :style=getImgStyle(item.icons)>
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService.js';

export default {
  name: 'categories',
  data() {
    return {
      categories: []
    }
  },
  created() {
    this.categories = CategoryService.getCategories();
  },
  methods: {
    getImgStyle: function(icons) {
      //TODO: add validations
      return {
        'height' : icons.height, 
        'width' : icons.width
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>