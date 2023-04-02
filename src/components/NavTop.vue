<template>
  <div class="h-20 flex justify-between items-center px-10 bg-white">
    <div><img src="@/assets/images/logo.png" alt="" /></div>
    <div class="flex w-full justify-center md:w-1/2">
      <div
        class="hidden border rounded-lg w-full md:flex"
      
      >
       
      <input
          ref="input"
         v-model="bookStore.search"
        placeholder="Rechercher des livres"
          class="outiline-0 py-2 px-3 rounded-lg text-gray-700 bg-transparent focus:shadow-outline focus:outline-none w-full"
        />
        <div class="w-10 h-10 bg-gray-100 flex items-center justify-center">
            <BaseIcon name="search"></BaseIcon>
        </div>
       
      </div>
    </div>
    <div class="flex items-center space-x-4 relative cursor-pointer" @click="showMenu = !showMenu">
      <div class="relative" @click.stop="goToBasket">
        <BaseIcon name="basket"></BaseIcon>
      <div class="absolute -top-3 -left-2 w-6 h-6 text-white flex justify-center items-center rounded-full bg-primary">{{ basketStore.getTotalQuantity }}</div>
      </div>
       
      <div class="rounded h-10 w-10 bg-black"></div>
      <div class="">
        <div>Username</div>
        <div class="text-sm">Admin</div>
      </div>
      <BaseIcon name="chevronDown"></BaseIcon>

      <div class="absolute bg-white shadow-2xl rounded  top-14 left-4 " @click.stop="" v-if="showMenu">
        <div class="flex items-center space-x-4 boder-b hover:bg-gray-200 py-2 px-6">
            <BaseIcon name="user"></BaseIcon>
            <div>Profil</div>
        </div>

        <div class="flex items-center space-x-4 py-2 px-6 hover:bg-gray-200">
            <BaseIcon name="logout"></BaseIcon>
            <div>Déconexion</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBasketStore } from '../stores/basket';
import { useBookStore } from '../stores/books';
import { useRouter } from 'vue-router';

    const basketStore = useBasketStore()
    const bookStore = useBookStore()

    const showMenu = ref(false)

    const router = useRouter()

    function goToBasket(){
        router.push({
            name : "basket"
        })
    }

</script>

<style scoped></style>
