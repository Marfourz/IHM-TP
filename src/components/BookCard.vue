<template>
  <div
    class="book-card rounded p-4 bg-white space-y-2 flex flex-col justify-between"
    @mouseenter="showBtn = true"
    @mouseleave="showBtn = false"
  >
    <div
      class="flex items-center justify-center"
      flex
      flex-col
      justify-between
    ><img :src="book.thumbnailUrl" alt="" class="book-img"></div>

    <div class="space-y-2 book-info">
      <div class="book-name">{{ book.title }}</div>
      <div>{{ book.authors[0] }}</div>
      <div>{{ book.price }} FCFA</div>
      
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

<style  scoped>
.book-card {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 6px;
  margin-bottom: 30px;
}
  .book-img {
    
    max-width: 100%;
    width: 150px;
    object-fit: cover;
  }
  .book-infos {
    padding: 0 12px;
   
  }
   .book-name {
      color: #1a1668;
      font-weight: 600;
      font-size: 18px;
    }

</style>
