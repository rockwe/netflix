<template>
	<div class='contact'>
		<form>
            <div class=form>
              <input type="radio" id="title_1" name="title" value="M." >Monsieur
              <input type="radio" id="title_2" name="title" value="Mme.">Madame
    			<div class="form-group">
    	            <label>Nom * </label>
    	            <input v-model="nom" name="lastName"/>
           		 </div>
                <div class="form-group">
                    <label>Prénom * </label>
                    <input v-model="prenom" name="firstName"/>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" v-model="email" name="email" pattern=".+@netflix.com" size="30" required>
                </div>
                <div class="form-group">
                    <label>Message *</label>
                    <input v-model="message" name="message" style="height:200px; width: 300px"/>
                </div>
            </div>
         <Button
        btnTitle="Envoyer"
        :classList="btnClass"
        :btnFunction="toggleModal"
        /> 
		</form>
	</div>
</template>

<script>
    import Button from "../../FrontendPages/Components/Button/Button";
    export default{
        components:{
            Button,
        },
        data:function(){
            return {
                modalActive:false
            }
        },
        methods:{
            toggleModel:function(){
                this.modalActive =! this.modalActive
            }
        }
    };
</script>

<style>
    .contact{
        width: 400px;
        margin: 0 auto;
        padding: 12px; 
        box-sizing: border-box; 
        margin-bottom: 16px; 
        resize: vertical;
    }
    .form{
        margin-top: 90px;
    }
    .form-group{
        margin-top: 100px;
        background:transparent;
        border: none;
        outline: none;
        border-bottom: 2px solid red;
        width : 200px;
        margin: 0;

    }
</style>    
