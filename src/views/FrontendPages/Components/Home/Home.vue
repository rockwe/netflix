<template>
<section id="home" class="iq-main-slider p-0">
  <Slick id="home-slider" class="slider m-0 p-0" :option="homeSliderOption">
    <div class="slide slick-bg s-bg-1" v-for="data in sliderData" :key="data.id">
      <b-container fluid class="position-relative h-100">
        <div class="slider-inner h-100">
            <b-row class="align-items-center  h-100">
              <b-col xl="6" lg="12" md="12">
                  <a href="#">
                    <div class="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                        <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="streami">
                    </div>
                  </a>
                  <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                    data-delay-in="0.6">{{data.title}}</h1>
                  <div class="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                    <span class="badge badge-secondary p-2">{{data.vote_average}}+</span>
                    <span class="ml-3">{{data.release_date}}</span>
                  </div>
                  <p data-animation-in="fadeInUp" data-delay-in="1.2">{{data.overview}}</p>
                  <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                    <router-link :to="{ name: 'landing-page.category-detail', params:{id:data.id} }" class="btn btn-hover"><i class="fa fa-play mr-2"
                        aria-hidden="true"></i>Play Now</router-link>
                    <router-link :to="{ name: 'landing-page.category-detail' }" class="btn btn-link">More details</router-link>
                  </div>
              </b-col>
            </b-row>
            <div class="trailor-video">
              <a href="../../../assets/video/trailer.mp4" class="video-open playbtn">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                    <polygon class='triangle' fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                    <circle class='circle' fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                  </svg>
                  <span class="w-trailor">Watch Trailer</span>
              </a>
            </div>
        </div>
      </b-container>
    </div>
  </Slick>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle"
        fill="none" stroke="currentColor">
        <circle r="20" cy="22" cx="22" id="test"></circle>
    </symbol>
  </svg>
</section>
</template>
<script>
    import ApiMovies from "@/mixins/movies";
export default {

  name: 'Home',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      sliderData: [],
      homeSliderOption: {
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
      }
    }
  },
    created: function () {
        console.log(this.sliderData)

        this.getMovies()
            .then(  data => {

                this.sliderData = data.data.results.slice(15, 17)
                console.log("movie", this.sliderData)
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
