<template>
  <div
    class="relative bg-white text-gray-500"
    v-outside-click="() => (showElement = false)"
  >
    <div
      class="flex justify-between items-center px-4 border py-2 rounded-md border-borderColor"
      @click="showElement = !showElement"
    >
      <input
        type="text"
        v-bind="$attrs"
        readonly
        :value="selected.title"
        class="focus:outline-none text-grey-70"
        style="font-weight: 600"
        v-if="selected"
      />
      <input
        v-else
        type="text"
        v-bind="$attrs"
        value="Aucun élement"
        readonly
        class="focus:outline-none text-grey-70"
        style="font-weight: 600"
      />
      <BaseIcon icon="drop-down" class="w-6 h-6"></BaseIcon>
    </div>

    <div
      class="absolute bg-white mt-1 w-full rounded-md shadow-xl max-h-64 overflow-auto"
      style="z-index:2000"
      v-if="showElement"
    >
      <div
        class="py-2 px-4 border-b-2 text-left hover:bg-blue-50 cursor-default"
        v-for="(element, i) in items"
        :key="element.value"
        :class="{
          'rounded-t-md': i == 0,
          'rounded-b-md': i == items.length - 1,
        }"
        @click="selectElement(element)"
      >
        {{ element.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.items[0],
      showElement: false,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },


  watch: {
    items(value) {
      if(value && value.length > 0){this.selected = value[0]

        this.$emit("update:modelValue",  this.selected.value);
      }
        
    },
  },



  methods: {
    selectElement(element) {
      this.showElement = !this.showElement;
      this.selected = element;
      console.log("element", this.selected.value);

      this.$emit("update:modelValue",  this.selected.value);
      this.$emit("select",  this.selected.value);
    },
  },

  mounted() {
    if (this.items.length > 0){
      this.$emit("update:modelValue", this.items[0].value);
    } 
  },
};
</script>

<style lang="scss" scoped></style>
