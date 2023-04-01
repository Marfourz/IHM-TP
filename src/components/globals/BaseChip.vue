<template>
    <div class="text-sm flex items-center space-x-4 rounded-full py-1 px-3 text-white bg-primary max-h-8" style="height:fit-content; width:fit-content">
        <div>{{text}}</div>
        <BaseIcon icon="close" @click="$emit('close')" class="w-2.5 h-2.5"></BaseIcon>
    </div>
</template>

<script>
    export default {
        props:{
            text:{
                type:String
            }
        }   
    }
</script>

<style lang="scss" scoped>

</style>