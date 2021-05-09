<template>
  <div class="categories">
    <h1>Categories</h1>
    <section v-if="errors.length > 0">
      <div v-for="error in errors" :key="error.id" >
        <p>{{error}}</p>
      </div>
    </section>
    <section v-else class="card-group">
      <div v-for="item in categories" :key="item.id">
        <div class="card">
          <img class="card-img-top" 
                :src="item.icons[0].url" 
                :style=getImgStyle(item.icons[0])>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
        </div>
      </div>
      <!--TODO: add paginator-->
    </section>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService.js';

export default {
  name: 'categories',
  data() {
    return {
      categories: [],
      errors: []
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
        CategoryService.getCategories()
        .then(response => this.categories = response.data.categories.items)
        .catch(error => this.errors.push(error.message));
    },
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