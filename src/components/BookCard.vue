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
    ><img :src="image" alt="" class="w-[150px]"></div>

    <div class="space-y-2">
      <div>{{ title }}</div>
      <div>{{ author }}</div>
      <div>{{ price }} FCFA</div>
      <div>{{ category }}</div>
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

<style scoped></style>
