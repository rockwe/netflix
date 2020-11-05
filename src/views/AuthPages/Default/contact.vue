<template>
	<div class='contact'>
		<form>
            <div class=form>
              <input type="radio" v-model="pick" v-bind:value="a">M.
              <input type="radio" v-model="pick" v-bind:value="b">Mlle.
              <input type="radio" v-model="pick" v-bind:value="c">Mme.
    			<div class="form-group">
    	            <label>Nom * </label>
    	            <input v-model="nom" name="lastName"required placeholder="nom..." />
           		 </div>
                <div class="form-group">
                    <label>Prénom * </label>
                    <input v-model="prenom" name="firstName"required placeholder="prénom..." />
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" v-model="email" name="email" pattern=".+@netflix.com" size="30" required placeholder="email@netflix.com...">
                </div>
                <div class="form-group">
                    <label>Message *</label>
                    <input v-model="message" id="message" style="height:200px; width: 300px "required />
                </div>
            </div>
            <Button
                btnTitle="Envoyer"
                :classList="btnClass"
                :btnFunction="Envoi"
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
                pick:"",
                nom:"",
                prenom:"",
                message:"",
                email:"",
                btnClass:"envoi",
                modalActive:false,
                a:"Monsieur",
                b:"mademoiselle",
                c:"Madame"
            }
        },
        methods:{
             showModel:function(){
                this.modalActive=true;
            },
            Envoi:function(){
                if (this.pick && this.message && this.nom && this.prenom && this.email){
                    const regex = RegExp('.+@netflix.com');
                    if(regex.test(this.email)){
                        alert(this.pick+" "+this.nom+", votre message a bien été envoyé!");
                    }else{
                       alert("Email doit etre sous format: '@netflix.com'")

                    }

                }
                else{
                    alert("Veuillez renseigner tous les champs")
                }
                this.modalActive =! this.modalActive
            },
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
