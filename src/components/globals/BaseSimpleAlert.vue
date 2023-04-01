<template>
    <div class="w-full rounded-lg p-4  flex space-x-4 items-center"
        :class="{
            'text-danger bg-fadeDanger': type == 'danger',
            'text-succes bg-success': type == 'success',
            'text-warning bg-warning': type == 'warning'
        }">
        <BaseIcon :icon="icon" v-if="icon"></BaseIcon>
        <div><slot></slot></div>
        
    </div>
</template>

<script>
    export default {
        props:{
            type:{
                type : String,
                default : "danger"
            },
            icon : {
                type : String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>