<template>
	<sousPage :titleL="titleL" :titleR="titleR">
			<template v-slot:lft>
				<p>Unable to login to Netflix? You can reset your password by receiving a reset email, or by receiving a text message if you've added your phone number to your account. If you forgot the email address or phone number you registered with, you may be able to provide additional information online in order to recover your account.</p>
          <ul style="text-align: left;">
            <li>
              <Button btnTitle="Reset password by using email"
                :btnFunction="toggleE"
                />  
            <p v-show="afficheE">
              Please click  <router-link to="/auth/password-reset1">here</router-link>
            </p></li>
            <li>
              <Button btnTitle="Reset password by using SMS"
                :btnFunction="toggleS"
              /> 
            <p v-show="afficheS">              
              Please click <router-link to="/auth/password-reset1">here</router-link>
            </p></li>
            <Button btnTitle="Retrieve your account credentials using your billing information"
                :btnFunction="toggleI"
            /> 
            <p v-show="afficheI">
              Please click  <router-link to="/auth/password-reset1">here</router-link>
            </p>
        </ul>
      </template>
      <template v-slot:rght>
              <ul style="text-align: center;">
                <li><router-link to="/profile-setting">How do I update my Netflix account information?</router-link></li>
                <li><router-link to="/profile-setting">How can i cancel my membership ?</router-link></li>
                <li><router-link to="/pricing-planning">How can i find the pricing plan ?</router-link></li>
              </ul>
      </template>
	</sousPage>
</template>
<script>
	import sousPage from "../FrontendPages/Components/sousPagesHelp/sousPage"
  import Button from "../FrontendPages/Components/Button/Button";

	export default{
        components:{
            sousPage,Button
        },

        data:function(){
            return {
                titleL:"I forgot my Netflix username or password",
                titleR:"Suggested articles",
                afficheE:false,
                afficheI:false,
                afficheS:false,
            }
        },

        methods:{
          toggleE:function(){
              if (this.afficheE==true){
                this.afficheE=false
              }else{
                this.afficheE=true
              }
          },
          toggleS:function(){
              if (this.afficheS==true){
                this.afficheS=false
              }else{
                this.afficheS=true
              }
          },
          toggleI:function(){
              if (this.afficheI==true){
                this.afficheI=false
              }else{
                this.afficheI=true
              }
          },
        }
        
    }
</script>
<style>
	Button{
  margin: 10px 0;
  display: inline-block;
}
h4{
	border-top: 2px solid red;
	margin: 10px 0px;
}
</style>