<template>
    <div class="rounded-lg shadow min-w-[300px] bg-white" >
       
        <div class=" border border-b p-4" @click="show = !show">
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

</style>