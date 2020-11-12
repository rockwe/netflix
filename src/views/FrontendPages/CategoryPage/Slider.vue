<template>
      <section class="iq-main-slider p-0">
      <Slick id="tvshows-slider" :option="sliderOption">
         <div v-for="item in sliderData" :key="item.id">
            <router-link :to="{ name: 'landing-page.category-detail',params:{id:item.id} }">
               <div class="shows-img">
                  <img :src="getImageFromApi(item.poster_path)" class="w-90" alt="">
                  <div class="shows-content">
                     <h4 class="text-white mb-1">{{item.title}}</h4>
                     <div class="movie-time d-flex align-items-center">
                        <div class="badge badge-secondary p-1 mr-2">{{item.vote_average}}</div>
                        <span class="text-white">{{item.release_date}}</span>
                     </div>
                  </div>
               </div>
            </router-link>
         </div>
      </Slick>
      <div class="dropdown genres-box">
        <b-dropdown id="dropdownMenuButton40" menu-class="three-column">
          <template v-slot:button-content>
            <b-link href="#" style="color:#fff"> Genre</b-link>
          </template>
          <b-dropdown-item href="#">Share</b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
          <b-dropdown-item href="#">Punjabi</b-dropdown-item>
          <b-dropdown-item href="#" >English</b-dropdown-item>
          <b-dropdown-item href="#" >Comedies</b-dropdown-item>
          <b-dropdown-item href="#" >Action</b-dropdown-item>
          <b-dropdown-item href="#" >Romance</b-dropdown-item>
          <b-dropdown-item href="#">Dramas</b-dropdown-item>
          <b-dropdown-item href="#" >Bollywood</b-dropdown-item>
          <b-dropdown-item href="#" >Hollywood</b-dropdown-item>
          <b-dropdown-item href="#" >Children & Family</b-dropdown-item>
          <b-dropdown-item href="#">Award-Winning</b-dropdown-item>
        </b-dropdown>
      </div>
   </section>
</template>
<script>
    import ApiMovies from "@/mixins/movies";
export default {
  name: 'Slider',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      sliderData: [],
      sliderOption: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
        prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
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
