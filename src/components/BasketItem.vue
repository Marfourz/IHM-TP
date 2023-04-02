<template>
    <div class="relative border border-borderColor rounded p-4 flex items-center space-x-4">
        <div class="bg-gray-400 w-[120px] h-[120px]">
            <img :src="item.book.thumbnailUrl" alt="">
        </div>
        <div class="w-full">
            <div class="font-bold text-2xl">{{item.book.title}}</div>
            <div>{{item.book.authors[0]}}</div>
            <div class="flex justify-between w-full">
                <div class="font-semibold">Qunatité</div>
                <div class="flex item-center space-x-2">
                    <div class="flex items-center justify-center border rounded w-10 h-10" @click="reduceItemBasket(item.book)">
                        -
                    </div>
                    <div class="flex flex-col justify-center">
                        {{ item.quantity }}
                    </div>
                    <div class="flex items-center justify-center border rounded w-10 h-10 cursor-pointer" @click="addBook">
                        +
                    </div>
                </div>
                <div class="font-bold">{{ item.book.price * item.quantity }} FCFA</div>
            </div>
        </div>
        <BaseIcon name="close" class="absolute top-2 right-4 w-3 h-3" @click="basketStore.removeFromBasket(item.book)"></BaseIcon>
    </div>
</template>

<script>

import {defineComponent} from "vue"
import { useBasketStore } from "../stores/basket";

export default defineComponent({
    props:{
        item:{}
    },
    setup(props){
        const basketStore = useBasketStore()

        function addBook(){
            basketStore.addToBasket(props.item.book, 1)
        }

        function reduceItemBasket(){
            basketStore.reduceItemBasket(props.item.book, 1)
        }


        return{ basketStore,addBook,reduceItemBasket }
    }
})

</script>

<style lang="scss" scoped>

</style>