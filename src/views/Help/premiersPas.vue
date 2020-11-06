<template>
	<sousPage :titleL="titleL" :titleR="titleR">
			<template v-slot:lft>
				<p>Netflix is ​​a subscription-based streaming service that allows our users to watch ad-free TV shows and movies on any device connected to the Internet.</p>
				<p>You can also download TV shows and movies to your iOS, Android, or Windows 10 device to watch them offline.</p>
				<p>If you are already a Netflix user and want to learn more about using our services, see Getting started with Netflix.</p>

                <h4>Séries TV and films</h4>
                <p>The content offered varies by country and may change over time. You have access to a wide variety of award-winning original programs, TV shows, films, documentaries, and more. </p>
                <p>The more you watch Netflix, the more relevant the TV show and movie recommendations you get.</p>
                <p>Before registering, you can preview the content offered by Netflix !</p>

                <h4>Pricing Plan</h4>
                <p>The plan you choose determines the number of devices on which you can watch Netflix simultaneously as well as the level of definition: standard (SD), high definition (HD) or ultra-high definition (UHD).</p>
          	</template>
          	<template v-slot:rght>
          		<ul style="text-align: center;">
          			<li><router-link to="/premiersPas">First steps with Netflix</router-link></li>
          			<li><router-link to="/profile-setting">How can i cancel my membership ?</router-link></li>
          			<li><router-link to="/pricing-planning">How can i find the pricing plan ?</router-link></li>
          		</ul>
          	</template>
	</sousPage>
</template>
<script>
	import sousPage from "../FrontendPages/Components/sousPagesHelp/sousPage"
	export default{
        components:{
            sousPage
        },

        data:function(){
            return {
                titleL:"What is Netflix ?",
                titleR:"Suggested articles"
            }
        }
    }
</script>
<style>
	li{
  margin: 10px 0;
}
h4{
	border-top: 2px solid red;
	margin: 10px 0px;
}
</style>