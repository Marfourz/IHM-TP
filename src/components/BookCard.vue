<template>
  <div
    class="rounded p-4 bg-white space-y-2 flex flex-col justify-between"
    @mouseenter="showBtn = true"
    @mouseleave="showBtn = false"
  >
    <div
      class="   flex items-center justify-center"
      flex
      flex-col
      justify-between
    ><img :src="book.thumbnailUrl" alt="" class="w-[150px]"></div>

    <div class="space-y-2">
      <div>{{ book.title }}</div>
      <div>{{ book.authors[0] }}</div>
      <div>{{ book.price }} FCFA</div>
      <div>{{ book.categories[0] }}</div>
    </div>
    <div class="w-full flex justify-center">
      <BaseButton class="w-full" @click="addToBasket(book)" :loading="loading">Ajouter au panier</BaseButton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useBasketStore } from "../stores/basket";
export default {
  props: {
   book:{}
  },
  setup() {
    const showBtn = ref(false);
    const basketStore = useBasketStore()
    const loading = ref(false)
    function addToBasket(book){
        loading.value = true
        window.setTimeout(()=>{
            basketStore.addToBasket(book,1)
            loading.value = false
        },1000)
        
    }
    return {
        basketStore,
        addToBasket,
        loading,
      showBtn,
    };
  },
};
</script>

<style scoped></style>
