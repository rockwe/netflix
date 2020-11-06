<template> 
    <div class="sousPage">
      <div class="left">
			<h2 class="category-title">{{titleL}}</h2>
			<div class="block">
				  <slot name="lft"></slot>
			</div>
      </div>

      	<div class="right"></div>
			<h5 class="category-title">{{titleR}}</h5>
			<div class="block">
				  <slot name="rght"></slot>
			</div>
    	</div>
</template>

<script>
export default {
    name:"sousPage",
    props:{
      titleR:String,
      titleL:String,
    },
};
</script>

<style>
.left{
	width:40%;
	float:left;
	margin:0px 20px;
}

.right{
	float:right;
	width:40%;
	margin:0;
}
.sousPage{

	padding-top: 120px;
	padding-bottom: 700px;
	text-align: center;

}
.block{
	text-align: justify;
	margin: 10px 0px;
}

</style>