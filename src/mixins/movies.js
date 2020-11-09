import apiConfigs from "../config/pluginInit";
import axios from "axios";
const API_KEY="d022f40aeefe674981eb14e477fac271"

export default {
    methods: {
        getMovies() {
            return axios.get('https://api.themoviedb.org/3/movie/635302?api_key=d022f40aeefe674981eb14e477fac271')
        },
        getMovie(id) {
            return fetch(`${apiConfigs.apiUrl}${id}`)
                .then(res=>res.json())
        }
    }
}


