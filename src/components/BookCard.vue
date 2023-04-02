<template>
  <div
    class="book-card rounded p-4 bg-white space-y-2 flex flex-col justify-between"
    @mouseenter="showBtn = true"
    @mouseleave="showBtn = false"
  >
    <div
      class="   flex items-center justify-center"
      flex
      flex-col
      justify-between
    ><img :src="image" alt="" class="book-img"></div>

    <div class="book-infos space-y-2">
      <div class="book-name">{{ title }}</div>
      <div class="book-author">{{ author }}</div>
      <div class="book-price text-primary">{{ price }} FCFA</div>
      <div class="book-cat">{{ category }}</div>
    </div>
    <div class="w-full flex justify-center">
      <BaseButton>Ajouter au panier</BaseButton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: "",
    price: "",
    author: "",
    image: "",
    category:""
  },
  setup() {
    const showBtn = ref(false);
    return {
      showBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
.book-card {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 6px;
  margin-bottom: 30px;
  .book-img {
    height: 250px;
    max-width: 100%;
    width: 232px;
    object-fit: cover;
  }
  .book-infos {
    padding: 0 12px;
    .book-name {
      color: #1a1668;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
