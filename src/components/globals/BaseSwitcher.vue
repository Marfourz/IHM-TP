<template>
  <div
    class="px-2 py-1.5 flex bg-blue-100 cursor-default text-sm justify-between rounded-3xl"
  >
    <div v-for="(value, i) in data" :key="i" class="w-1/2 text-center">
      <div
        @click="
          index = i;
          valueChange(value)
        "
        class="py-2 text-gray-700 rounded-3xl flex justify-center items-center space-x-2 text-sm"
        :class="{ 'bg-primary text-white font-bold shadow': index == i }"
      >
        <div :class="{'text-white': index == i}"> {{ value.title }}</div>
        
       
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      index : 0,
    }
  },
   props: {
    data: {
      type: Array
    }
  },

  methods : {
    valueChange(newValue){
      this.$emit('change', newValue.name)
    }

  }

  }
</script>

<style scoped></style>
