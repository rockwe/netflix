<template>
	<div class="global">
		<section class="top-articles">
			<div class="div">
				<h2 class="category-title">First steps</h2>
				<ul class="list-articles">
					<li class="article">
						<li><router-link to="/premiersPas">What's Netflix ?</router-link></li>
					</li>
					<li class="article">
						<a href="">How to pay for my Netflix subscription ?</a>
					</li>
				</ul>
			</div>
			<div class="div">
				<h2 class="category-title">Cannot read</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="/mdp">I forgot my Netflix username or password</a>
					</li>

				</ul>
			</div>
			<div class=" div">
				<h2 class="category-title">Quick links</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="#"> Reset password </a>
					</li>
				
					<li class="article">
						<a href="">Update Email </a>
					</li>

					<li class="article">
						<a href="#">Request movies or TV shows </a>
					</li>
				</ul>
			</div>


			<div class=" div">
				<h2 class="category-title">Watch Netflix</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="#"> idée1 </a>
					</li>
				
					<li class="article">
						<a href="">idée2 </a>
					</li>

					<li class="article">
						<a href="#">idée3 </a>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	
</script>

<style>
	.top-articles .list-articles  .article{
    margin-left: 20px;
    margin-right: 20px;
}
.top-articles{
	padding-top: 170px;
}
.div{
	background-color: transparent;
	margin: 6px;
	display: inline-block;
	height: 140px;
	width: 390px;
	text-align: center;
}
.section{
	text-align: center; 
	height: 100px;	
	padding: 0px;
}


</style>