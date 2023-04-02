<template>
  <div class="md:p-20 p-4 flex md:flex-row flex-col md:space-x-10 space-y-4 md:space-y-0">
    <div class="space-y-8">
      <div class="space-y-4">
        <div class="flex space-x-2 items-center">
          <BaseIcon name="filter"></BaseIcon>
          <div class="text-2xl text-primary font-bold">Filtrer</div>

        </div>
    
        <FilterCard title="Catégorie">
          <template #body>
            <div class="flex flex-col">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-x-2" v-for="category in bookStore.categories">
                  <input
                    type="checkbox"
                    @change="checkCategory($event, category)"
                  />
                  <label for="">{{ category }}</label>
                </div>
              </div>
            </div>
          </template>
        </FilterCard>
      </div>

      <FilterCard title="Année"> </FilterCard>
    </div>

    <div class="w-full h-full overflow-scroll">
      <div class="flex space-x-4 items-center mb-4">
        <div class="text-2xl text-primary font-bold">
          Liste des livres
        </div>
       
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
        <BookCard
          v-for="book in books"
          :key="book.name"
          :book="book"
         
        />
      </div>
      <div class="flex justify-end w-full pt-6">
        <vue-awesome-paginate
          :total-items="bookStore.total"
          :items-per-page="5"
          :max-pages-shown="5"
          v-model="currentPage"
          :on-click="onClickHandler"
          prev-button-content="Prev"
          next-button-content="Next"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterCard from "@/components/FilterCard.vue";
import BaseIcon from "../components/globals/BaseIcon.vue";
import BookCard from "../components/BookCard.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useBookStore } from "@/stores/books.js";
import { useBasketStore } from "../stores/basket";

export default {
  components: { FilterCard, BaseIcon, BookCard },
  setup() {
    const currentPage = ref(1);
    const bookStore = useBookStore();
    const basketStore = useBasketStore()

    const filter = ref({
      search: "",
      categories: [],
    });

    const books = computed(() => {
      return bookStore.books;
    });

    function checkCategory(event, category) {
      if (event.target.checked) {
        filter.value.categories.push(category);
      } else
        filter.value.categories = filter.value.categories.filter(
          (value) => value != category
        );
      bookStore.fetchBooks(currentPage.value, filter.value);
    }

    watch(currentPage, (newValue) => {
      bookStore.fetchBooks(currentPage.value, filter.value);
    });

    onMounted(() => {
      bookStore.fetchBooks(currentPage.value, filter.value);
    });

    return {
      currentPage,
      bookStore,
      basketStore,
      books,
      checkCategory,
      filter,
    };
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #1a1668;
  border: 1px solid #1a1668;
  color: white;
}
.active-page:hover {
  background-color: #1a1668;
}
</style>
