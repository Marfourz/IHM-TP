<template>
    <button 
    v-bind="$attrs"
    @click="btnClick"
    :disabled="disabled"
    :class="{ 
        'py-1 px-8': size == 'small',
        'py-2.5 px-8': size == 'medium',
        'py-4 px-8': size == 'large',
        'md:text-sm text-xs': size == 'small',
        'md:text-md text-sm': size == 'medium',
        'text-lg': size == 'large',
        'bg-blue-100' : loading == true,
        
        'bg-danger hover:bg-red-800 text-white' : type == 'danger',
        'bg-success hover:bg-green-800 text-white' : type == 'success',
        'bg-primary  text-white' : !disabled && type == 'primary',
        'bg-white border md:border-2 border-primary hover:bg-gray-200 text-gray-700' : type == 'outline',
        'bg-blue-100 text-gray-500': disabled  && type == 'primary'
    }"
    class="cursor-pointer rounded flex items-center justify-center text-center font-bold">
        <img :src="iconLink" alt="" class="w-6 h-6 mx-1" v-if="icon">
        <div v-if="loading == false"><slot></slot></div>
        <div v-else>Chargement....</div>
        
    </button>
</template>

<script>
    export default {
        data(){
            return {
                iconLink : ""
            }
        },
        props:{
            type : {
                type : String,
                default : "primary",
                validator: function(value){
                    return [
                        'primary',
                        'success',
                        'danger'
                    ].indexOf(value) !== -1
                }
            },
            size : {
                type : String,
                default : "medium",
                validator: function(value){
                    return [
                        'small',
                        'medium',
                        'large'
                    ].indexOf(value) !== -1
                }
            },
              icon : {
                type: String
            },
            loading : {
                type : Boolean,
                default : false
            },
            disabled:{
                type : Boolean,
                default : false
            }

        },
        mounted(){
            if(this.icon)
                this.iconLink = require(`@assets/svg/icons/${this.icon}.svg`)
        },
        methods:{
            btnClick(event){
                if(this.loading)
                    event.preventDefault();
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>