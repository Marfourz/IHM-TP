<template>
    <div class="sign-up h-screen w-screen flex">
        <div class="auth-sidebar w-[50%] bg-primary text-red-400 flex flex-col justify-center">
                <img src="@/assets/images/library.jpg" alt="" >
        </div>
        <div class="w-[50%] h-full flex items-center justify-center">
            <Form 
            @submit="register"
            class="w-[80%] flex items-center justify-center flex-col space-y-4   py-8 px-6 md:px-14"
          >
            <div class="text-4xl text-left text-primary font-bold">Créer un compte</div>

            <BaseSimpleAlert icon="warning" type="danger" v-if="errorMessage">{{errorMessage}}</BaseSimpleAlert>
           
            <BaseInput
              v-model="username"
              name="lastname"
              rules="required"
              label="Nom"
              class="w-full"
            ></BaseInput>
            <BaseInput
              v-model="username"
              name="firstname"
              rules="required"
              label="Prénom"
              class="w-full"
            ></BaseInput>
            <BaseInput
              v-model="username"
              name="email"
              rules="required"
              label="Email"
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
import { ref } from 'vue';

const router = useRouter()

const errorMessage = ref("")

const lastname = ref("")

const firstname = ref("")

const email = ref("")

const password = ref("")

const loading = ref(false)



function register(){

    loading.value = true
    window.setTimeout(function(){
        console.log("register", errorMessage)
        router.push({name : 'home'})
    loading.value = false
    }, 1000)
}


</script>

<style lang="scss" scoped>
.sign-up {
  .auth-sidebar {
    img {
      object-fit: cover;
      height: 100%;
    }
  }
}

@media (max-width: 992px) {
  .sign-up {
    .auth-sidebar {
      display: none;
    }
  }
}

</style>