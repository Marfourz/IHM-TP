<template>
    <div class="h-screen w-screen flex">
        <div class="w-[50%] bg-primary text-red-400 flex flex-col justify-center">
                <img src="@/assets/images/bookInBasket.png" alt="" >
        </div>
        <div class="w-[50%] h-full flex items-center justify-center">
            <Form 
            @submit="login"
            class="w-[80%] flex items-center justify-center flex-col space-y-4   py-8 px-6 md:px-14"
          >
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
            <div class="text-primary text-sm underline cursor-pointer" @click="$router.push({name:'registrationUserInfos'})">Créer un compte</div>
          </Form>
        </div>
       
    </div>
</template>

<script setup>

import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const errorMessage = ref("")

const username = ref("")

const password = ref("")

const goodPassword = "adminadmin"

const loading = ref(false)



function login(){

    loading.value = true
    window.setTimeout(function(){
        console.log("login", errorMessage)
    if(password.value != goodPassword)
        errorMessage.value = "Vos identifiant sont incorrectes"
    else{
        errorMessage.value = ""
        router.push({
            name : 'home'
        })
    }
    loading.value = false
    }, 1000)

   
        
}


</script>

<style lang="scss" scoped>

</style>