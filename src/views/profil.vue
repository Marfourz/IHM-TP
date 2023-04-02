<template>
    <div>
      <div class="md:px-40 px-6 py-20 space-y-10 bg-white" >
        <div
          class="text-xl flex space-x-2 items-center text-primary cursor-pointer"
          @click="goBack"
        >
          <div><BaseIcon name="arrowLeft"> </BaseIcon></div>
          <div>Retour</div>
        </div>
        <div class="font-bold text-2xl">
         Votre profil
        </div>
  
    <div class="grid grid-cols-3 gap-4 mt-10">
      <div class="flex flex-col">
        <span class="font-semibold text-base">Nom</span>
        <span class="font-medium text-sm">{{ bookStore.currentUser?.lastname }}</span>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold text-base">Prénom(s)</span>
        <span class="font-medium text-sm"> {{ bookStore.currentUser?.firstname }} </span>
      </div>

     
      <div class="flex flex-col">
        <span class="font-semibold text-base">Email</span>
        <span class="font-medium text-sm">{{ bookStore.currentUser?.firstname }}</span>
      </div>
    
    </div>
      </div>
     
    </div>
  </template>
  
  <script setup>
  import { useBookStore } from "@/stores/books";
  import { useRouter } from "vue-router";
  
  
  const bookStore = useBookStore();
  
  const router = useRouter();
  
  function goBack() {
    router.back();
  }
  
  
  
  
  function goToBook(){
      router.push({
          name : 'books'
      })
  }
  
  </script>
  
  <style scoped></style>
  