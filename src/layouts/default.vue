<template>
    <div class="h-screen w-screen">
        <NavTop></NavTop>
        <div class="h-[calc(100vh-70px)] bg-gray-100 overflow-scroll">
            <RouterView></RouterView>
        </div>
        
    </div>
</template>

<script setup>
import NavTop from '../components/NavTop.vue';

</script>

<style  scoped>

</style>