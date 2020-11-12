<template>
    <div>
        <WishlistMovies />
    </div>
</template>

<script>
    import {core} from "../../config/pluginInit";
    import WishlistMovies from "./WishlistsPage/WishlistMovies";

    export default {
        name: "Wishlists",
        components: {
            WishlistMovies
        },
        mounted () {
            core.index()
        }
    }
</script>

<style scoped>

</style>
