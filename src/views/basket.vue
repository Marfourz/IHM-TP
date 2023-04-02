<template>
  <div>
    <div class="md:px-40 px-6 py-20 space-y-10 bg-white" v-if="!paymentSuccess">
      <div
        class="text-xl flex space-x-2 items-center text-primary cursor-pointer"
        @click="goBack"
      >
        <div><BaseIcon name="arrowLeft"> </BaseIcon></div>
        <div>Retour</div>
      </div>
      <div class="font-bold text-2xl">
        Panier ({{ basketStore.getTotalQuantity }})
      </div>

      <div>
        <div
          class="flex space-x-6 w-full flex-col md:flex-row md:space-y-0 space-y-4"
        >
          <div class="md:w-[60%] space-y-4">
            <BasketItem
              v-for="item in basketStore.books"
              :key="item.book.title"
              :item="item"
            ></BasketItem>
          </div>
          <div class="md:w-[40%] space-y-10">
            <div class="font-bold text-2xl">Votre commande</div>
            <div class="w-full justify-between flex mt-10">
              <div class="font-semibold">Total</div>
              <div class="font-semibold">
                {{ basketStore.getTotalPrice }} FCFA
              </div>
            </div>
            <BaseButton class="w-full" size="large" @click="kkiapayWidget"
              >PAYER</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else class="md:px-40 px-6 py-20 space-y-10 bg-white flex flex-col items-center justify-center">
        <img src="@/assets/images/success.webp" alt="" class="h-80">
        <div class=" text-2xl text-center">Super <br> Paiement effectué succès. <br> Merci pour votre confiance !!!!</div>

    </div>
  </div>
</template>

<script setup>
import BasketItem from "../components/BasketItem.vue";
import BaseButton from "../components/globals/BaseButton.vue";
import { useBasketStore } from "../stores/basket";
import { useRouter } from "vue-router";
import { ref,onMounted } from "vue";
import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";

const basketStore = useBasketStore();

const router = useRouter();

function goBack() {
  router.back();
}

const paymentSuccess = ref(false)

async function successHandler() {
    paymentSuccess.value = true
}

function kkiapayWidget() {
  openKkiapayWidget({
    amount: basketStore.getTotalPrice,
    api_key: "8e71abd047cf11ed958fbf3ec63d1ffd",
    sandbox: true,
    phone: "97000000",
  });
}

onMounted(() => {
      //basketStore.clearBasket();
      addKkiapayListener('success', successHandler);
    });
</script>

<style scoped></style>
