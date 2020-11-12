import apiConfigs from "../config/pluginInit";
import axios from "axios";
const API_KEY="d022f40aeefe674981eb14e477fac271"

const l ='https://api.themoviedb.org/3/movie/635302?api_key=d022f40aeefe674981eb14e477fac271'

export default {
    methods: {
        getMovies() {
            return axios.get(apiConfigs.apiUrl + 'movie/popular?api_key='+API_KEY)
        },
        getUpcoming() {
            return axios.get(apiConfigs.apiUrl + 'movie/upcoming?api_key='+API_KEY)
        },
        getdetail() {
            return axios.get(apiConfigs.apiUrl + 'movie/latest?api_key='+API_KEY)
        },
        getLatest() {
            return axios.get(apiConfigs.apiUrl + 'trending/all/day?api_key='+API_KEY)
        },
        getMovie(id) {
            return axios.get(apiConfigs.apiUrl + 'movie/'+ id +'?api_key=' + API_KEY )
        },
        getSearch(text){
            return axios.get(apiConfigs.apiUrl+ 'search/movie?api_key='+ API_KEY + '&language=fr&query='+ text )
        }
    }
}


