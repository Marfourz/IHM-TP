<template>
    <div class="sign-in h-screen w-screen flex">
        <div class="auth-sidebar w-[50%] bg-primary text-red-400 flex flex-col justify-center">
                <img src="@/assets/images/library.jpg" alt="" >
        </div>
        
        <div class="md:w-[50%] w-full h-full flex items-center justify-center">
            <Form 
            @submit="login"
            class="w-[80%] flex items-center justify-center flex-col space-y-4   py-8 px-6 md:px-14"
          >

            <div class="text-4xl text-left text-primary font-bold">Se connecter</div>

            <BaseSimpleAlert icon="warning" type="danger" v-if="errorMessage">{{errorMessage}}</BaseSimpleAlert>
           
            <BaseInput
              v-model="username"
              name="email"
              rules="required"
              label="Nom d'utilisateur / Email"
              class="w-full"
            ></BaseInput>
            <BaseInput
                type="password"
                name="mot de passe"
              v-model="password"
              rules="required"
              label="Mot de passe"
              class="w-full"
            ></BaseInput>
            <div class="text-primary cursor-pointer text-right w-full">
              Mot de passe oublié
            </div>
            <BaseButton class="w-full" :loading="loading">Se connecter</BaseButton>
            <div class="text-sm pt-4">Vous n'avez pas encore de compte ?</div>
            <div class="text-primary text-sm underline cursor-pointer" @click="$router.push({name:'register'})">Créer un compte</div>
          </Form>
        </div>
       
    </div>
</template>

<script setup>

import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';
import { useBookStore } from '../../stores/books';

const router = useRouter()

const errorMessage = ref("")

const username = ref("")

const password = ref("")

const goodPassword = "adminadmin"



const loading = ref(false)
const bookStore = useBookStore()


function login(){

    

    loading.value = true
    window.setTimeout(function(){
        console.log("login", errorMessage,bookStore.currentUser)
    if(username.value != bookStore.currentUser.email || password.value != goodPassword){
        errorMessage.value = "Vos identifiant sont incorrectes"
        loading.value = false
    }
        
    else{
        errorMessage.value = ""
        router.push({
            name : 'books'
        })
    }
    loading.value = false
    }, 1000)
     
}



</script>

<style  scoped>


.auth-sidebar img {
      object-fit: cover;
      height: 100%;
    }

@media (max-width: 992px) {
    .auth-sidebar {
      display: none;
    }
}

</style>