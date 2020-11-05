<template> 
    <button :class="classList" @click.prevent="btnFunction"> {{btnTitle}}</button>
    <!--prevent pr ne pas rechercher la page a chak envoie 
    on peut aulieu de ça mettre dns la function toggle avc param (e)// e.prevent()-->
</template>

<script>
export default {
    name:"Button",
    props: {
        btnTitle:String,
        classList:String,
        btnFunction:Function
  }
};
</script>

<style lang="css" scoped>
.btn{
    display:inline-block;
    font-size:12px;
}
</style>