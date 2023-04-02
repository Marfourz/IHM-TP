<template>
    <div class="rounded-lg min-w-[300px] bg-white" >
       
        <div class="border-b p-4 filterCard-title text-primary" @click="show = !show">
            {{ title }}
        </div>

        <div class="p-4" v-if="show" >
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    props:{
        title : ""
    },
    setup () {
        
        const show = ref(true)

        return {
            show
        }
    }
}
</script>

<style lang="scss" scoped>
.filterCard-title {
    font-size: 18px;
    font-weight: 500;
}
</style>