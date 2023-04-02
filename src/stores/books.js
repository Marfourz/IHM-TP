import { ref, computed } from "vue";
import { defineStore } from "pinia";
import allBooks from "@/data/add_price.json";

import {watch} from "vue"

export const useBookStore = defineStore("book", () => {
  const peerPage = 6;

  const filter = ref({
    search: "",
    categories: [],
  });


  const search = ref("")

  const categories = computed(() => {
    return [
      ...new Set(
        allBooks.map((book) => {
          return book.categories[0];
        })
      ),
    ];
  });

  const books = ref([]);

  const total = ref(0)

  function fetchBooks(currentPage, filter) {

    let filterBooks = allBooks;
    if (filter) {
        if(filter.categories && filter.categories.length > 0){
            filterBooks = filterBooks.filter((value) => {
                return filter.categories.find((cat)=>value.categories && cat == value.categories[0])
              }
                
              );
        }

        if(search.value){
            filterBooks = filterBooks.filter((value)=>{
                const searchData = `${value.title}${value.authors[0]}`
                return searchData.toLowerCase().includes(search.value.toLowerCase())
            })
        }
    }

    total.value = filterBooks.length
    
    books.value = filterBooks.splice(currentPage * peerPage - peerPage, peerPage);
    
  }

  watch(search,(newValue)=>{
    let filterBooks =  allBooks; 
    if(newValue){
        filterBooks = filterBooks.filter((value)=>{
            const searchData = `${value.title}${value.authors[0]}`
            return searchData.toLowerCase().includes(newValue.toLowerCase())
        })
    }
    total.value = filterBooks.length
    books.value = filterBooks.splice(1, peerPage);
    
  })

 

  return {  categories,fetchBooks,books,search,total };
});
