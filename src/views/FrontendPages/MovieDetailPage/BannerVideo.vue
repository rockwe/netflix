<template>

        <div class="video d-block" controls loop>
            <img :src="getImageFromApi(item.poster_path)" class="img-fluid" alt="">

   </div>
</template>
<script>
export default {
  name: 'BannerVideo',
  components: {
  },
  mounted () {
  },
  data () {
    return {
    }
  },

}
</script>
