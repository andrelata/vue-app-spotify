<template>
  <div class="categories">
    <h1>Categories</h1>
    <b-card-group>
      <div v-for="item in categories" :key="item.id">
        <b-card :img-src="item.icons[0].url" 
                :img-style="getImgStyle(item.icons[0])" img-top>
          <b-card-text>
            <h5 class="card-title">{{ item.name }}</h5>
          </b-card-text>
        </b-card>
      </div>
      <!--TODO: add paginator-->
    </b-card-group>
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
    this.getCategories();
  },
  methods: {
    getCategories() {
        CategoryService.getCategories()
        .then(response => this.categories = response.data.categories.items);
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