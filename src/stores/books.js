import { ref, computed } from "vue";
import { defineStore } from "pinia";
import allBooks from "@/data/books.json";

export const useBookStore = defineStore("book", () => {
  const peerPage = 6;

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

  function getTotal() {
    return allBooks.length;
  }

  function fetchBooks(currentPage, filter) {

    let filterBooks = allBooks;
    if (filter) {
        if(filter.categories && filter.categories.length > 0){
            filterBooks = filterBooks.filter((value) => {
                return filter.categories.find((cat)=>value.categories && cat == value.categories[0])
              }
                
              );
        }

        if(filter.search){
            console.log("filter search", filter.search);
            filterBooks = filterBooks.filter((value)=>value.title.include(filter.search))
        }
    }
    
    books.value = filterBooks.splice(currentPage * peerPage - peerPage, peerPage);
    
  }

 

  return {  getTotal, categories,fetchBooks,books };
});
