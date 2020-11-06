<template>
	<div class="global">
		<section class="top-articles">
			<div class="div">
				<h2 class="category-title">Premiers pas</h2>
				<ul class="list-articles">
					<li class="article">
						<li><router-link to="/premiersPas">Qu'est-ce que Netflix ?</router-link></li>
					</li>
					<li class="article">
						<a href="">Comment payer mon abonnement Netflix ?</a>
					</li>
				</ul>
			</div>
			<div class="div">
				<h2 class="category-title">Lecture impossible</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="">J'ai oublié mon identifiant ou mon mot de passe Netflix</a>
					</li>

				</ul>
			</div>
			<div class=" div">
				<h2 class="category-title">Liens rapides</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="#"> Réinitialiser le mot de passe </a>
					</li>
				
					<li class="article">
						<a href="">Mettre à jour l'e-mail </a>
					</li>

					<li class="article">
						<a href="#">Demander des films ou des séries TV </a>
					</li>
				</ul>
			</div>


			<div class=" div">
				<h2 class="category-title">Liens rapides</h2>
				<ul class="list-articles">
					<li class="article">
						<a href="#"> Réinitialiser le mot de passe </a>
					</li>
				
					<li class="article">
						<a href="">Mettre à jour l'e-mail </a>
					</li>

					<li class="article">
						<a href="#">Demander des films ou des séries TV </a>
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