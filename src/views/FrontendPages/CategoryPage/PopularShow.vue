<template>
<section id="iq-favorites">
    <b-container>
        <b-row>
            <b-col sm="12" class="overflow-hidden">
                <div class="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 class="main-title">Popular Shows</h4>
                </div>
                <div class="favorites-contens">
                    <Slick class="favorites-slider list-inline  row p-0 mb-0" :option="sliderOption">
                        <li class="slide-item" v-for="item in sliderData" :key="item.id">
                            <router-link :to="{ name: 'landing-page.show-single',params:{id:item.id} }">
                                <div class="block-images position-relative">
                                    <div class="img-box">
                                    <img :src="getImageFromApi(item.poster_path)" class="img-fluid" alt="">
                                    </div>
                                    <div class="block-description">
                                    <h6>{{item.title}}</h6>
                                    <div class="movie-time d-flex align-items-center my-2">
                                        <div class="badge badge-secondary p-1 mr-2">{{item.vote_average}}</div>
                                        <span class="text-white">{{item.release_date}}</span>
                                    </div>
                                    <div class="hover-buttons">
                                        <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now</span>
                                    </div>
                                    </div>
                                    <div class="block-social-info">
                                    <ul class="list-inline p-0 m-0 music-play-lists">
                                        <li><span><i class="ri-volume-mute-fill"></i></span></li>
                                        <li><span><i class="ri-heart-fill"></i></span></li>
                                        <li><span><i class="ri-add-line"></i></span></li>
                                    </ul>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </Slick>
                </div>
            </b-col>
        </b-row>
    </b-container>
</section>
</template>
<script>
    import ApiMovies from "@/mixins/movies";
export default {
  name: 'PopularShow',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      sliderData: [],
      sliderOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },

    created: function () {
        console.log(this.favoriteData)
        this.getUpcoming()
            .then(  data => {

                this.sliderData = data.data.results.slice(0, 4)

            })
            .catch(err => console.log(err));
    },
    components: {
    },
    methods: {
        getImageFromApi (name) {
            return 'https://image.tmdb.org/t/p/w300' + name
        }
    },
    mixins: [ApiMovies]
}
</script>
