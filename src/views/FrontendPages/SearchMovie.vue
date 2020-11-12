<template>
    <div>
        <SearcMovie/>

    </div>
</template>

<script>
    import SearcMovie from "./SearchPage/SearchMovie";
    import {core} from "../../config/pluginInit";

    export default {
        name: "SearchMovie",
        components: {
            SearcMovie
        },
        mounted () {
            core.index()
        }
    }
</script>

<style scoped>

</style>
