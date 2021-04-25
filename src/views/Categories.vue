<template>
  <div class="categories">
    <h1>Categories</h1>
    <div v-for="item in getCategories" :key="item.id">
      <img  :src="item.icons.url" 
            :style="{ 'height' : item.icons.height , 
                      'width' : item.icons.width}">
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

//TODO: 2. poner esa funcion en un service de categories (data mockeada)
//TODO: 3. definir un modolo para el objeto categoria
//TODO: 4. conectar el servicio con una api mockeada

<script>
export default {
  name: 'categories',
  computed: {
    getCategories: function() {
      return [
                {
                    "href":"https://api.spotify.com/v1/browse/categories/toplists",
                    "icons":
                    {
                        "height":275,
                        "url":"https://datsnxq1rwndn.cloudfront.net/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                        "width":275
                    },
                    "id":"toplists",
                    "name":"Top Lists"
                },
                {
                    "href":"https://api.spotify.com/v1/browse/categories/mood",
                    "icons":
                    {
                        "height":274,
                        "url":"https://datsnxq1rwndn.cloudfront.net/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
                        "width":274
                    },
                    "id":"mood",
                    "name":"Mood"
                }
            ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>