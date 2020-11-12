<template>
    <section class="movie-detail container-fluid">
        <b-row>
            <b-col lg="12" class="col-lg-12">

                <div class="trending-info g-border">

                        <img :src="getImageFromApi(movie.poster_path)" class="img-fluid" alt="">

                    <h1 class="trending-text big-title text-uppercase mt-0">{{movie.title}}</h1>
                    <ul class="p-0 list-inline d-flex align-items-center movie-content" v-for="item in movie.genres">
                        <li class="text-white" >{{item.name}}</li>

                    </ul>
                    <div class="d-flex align-items-center text-white text-detail">
                        <span class="badge badge-secondary p-3">{{movie.original_language}}</span>
                        <span class="ml-3">{{movie.runtime}}m</span>
                        <span class="trending-year">{{movie.release_date}}</span>
                    </div>
                    <div class="d-flex align-items-center series mb-4">
                        <a href="javascript:void();"><img src="images/trending/trending-label.png" class="img-fluid"
                            alt=""></a>
                        <span class="text-gold ml-3">{{movie.status}}</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">{{movie.overview}}</p>
                    <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                        <li><span><i class="ri-add-line"></i></span></li>
                        <li><span><i class="ri-heart-fill"></i></span></li>
                        <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                            <div class="d-flex align-items-center">
                                <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </section>
</template>
<script>
    import ApiMovies from "@/mixins/movies";
export default {

  name: 'Detail',
  components: {
  },
  mounted () {
  },
  data () {
    return {
        movie:{}
    }
  },
    created() {
        console.log(this.$route.params.id);
        this.getMovie(this.$route.params.id)
            .then(data=> {this.movie=data.data
                console.log(this.movie);
            })
            .catch(err=> console.log(err))
    },

        methods: {
            getImageFromApi (name) {
                return 'https://image.tmdb.org/t/p/w300' + name
            }
        },

    mixins:[ApiMovies]
}
</script>
