import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', () => {
 const books = ref([])

 function addToBasket(book,quantity){
    const index = books.value.findIndex((value)=>{
        console.log("index", value.title,book.title)
        return value.book.title == book.title
    })
    
    if(index == -1)
        books.value.push({book : book, quantity : quantity})
    else
        books.value[index].quantity = books.value[index].quantity + quantity
 }


 function reduceItemBasket(book,quantity){

    const index = books.value.findIndex((value)=>value.book.title == book.title)
    if(index != -1){
        if(books.value[index].quantity > 0)
            books.value[index].quantity = books.value[index].quantity - quantity
    }
        
    
        
 }

 function removeFromBasket(book){
    books.value = books.value.filter((value)=>value.book.title != book.title)
 }

 const getTotalQuantity = computed(()=>{
    let total = 0
    books.value.map((value)=>total += value.quantity)
    return total
 })


 const getTotalPrice = computed(()=>{
    let total = 0
    console.log("total price", total);
    books.value.map((value)=>total += value.book.price * value.quantity)
   
    return total
 })


 return {addToBasket,removeFromBasket,books,getTotalQuantity,reduceItemBasket,getTotalPrice}
})
