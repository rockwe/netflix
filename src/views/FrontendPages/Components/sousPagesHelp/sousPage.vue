<template> 
    <div id="sousPage">

      <div class="left">
			<h2 class="category-title">{{title}}</h2>
			<div class="block">
				<p>{{text}}</p>
			</div>
			<div class="block">
				<p>{{text}}</p>
			</div>
			<div class="block">
				<p>{{text}}</p>
			</div>
      </div>

      <div class="right"></div>
		<h2 class="category-title"></h2>
		<div class="block">
			<p>{{text}}</p>
		</div>

    </div>
</template>

<script>
export default {
    name:"sousPage",
    props:{
      title:String,
      text:String,
    },
    data:function(){
            return {
                title:"MON TITRE",
                text: "mchin"
            }
        }
};