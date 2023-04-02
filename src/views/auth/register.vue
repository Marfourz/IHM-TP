<template>
    <div class="sign-up h-screen w-screen flex">
        <div class="auth-sidebar w-[50%] bg-primary text-red-400 flex flex-col justify-center">
                <img src="@/assets/images/library.jpg" alt="" >
        </div>
        <div class="md:w-[50%] w-full h-full flex items-center justify-center">
            <Form 
            @submit="register"
            class="w-[80%] flex items-center justify-center flex-col space-y-4   py-8 px-6 md:px-14"
          >
            <div class="text-4xl text-left text-primary font-bold">Créer un compte</div>

            <BaseSimpleAlert icon="warning" type="danger" v-if="errorMessage">{{errorMessage}}</BaseSimpleAlert>
           
            <BaseInput
              v-model="user.firstname"
              name="lastname"
              rules="required"
              label="Nom"
              class="w-full"
            ></BaseInput>
            <BaseInput
              v-model="user.lastname"
              name="firstname"
              rules="required"
              label="Prénom"
              class="w-full"
            ></BaseInput>
            <BaseInput
              v-model="user.email"
              name="email"
              rules="required"
              label="Email"
              class="w-full"
            ></BaseInput>
            <BaseInput
                type="password"
                name="mot de passe"
              v-model="user.password"
              rules="required"
              label="Mot de passe"
              class="w-full"
            ></BaseInput>
            <BaseButton class="w-full" :loading="loading">Créer un compte</BaseButton>
            <div class="text-sm pt-4">Vous avez déjà un compte?</div>
            <div class="text-primary text-sm underline cursor-pointer" @click="$router.push({name:'login'})">Se connecter</div>
          </Form>
        </div>
       
    </div>
</template>

<script setup>

import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { ref,reactive } from 'vue';
import { useBookStore } from '../../stores/books';

const router = useRouter()

const errorMessage = ref("")

const user = reactive({
    lastname : "",
    firstname: "",
    email : "",
    password : ""



})



const loading = ref(false)

const bookStore = useBookStore()

function register(){

    loading.value = true
    window.setTimeout(function(){
        console.log("register", errorMessage)
        //bookStore.saveUser(user)
        router.push({name : 'books'})
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