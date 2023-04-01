<template>
    <div>
        <BaseDialog :visible="visible" @close="visible = false" header="false" :width="width" :heigth="heigth">
            <template #modal>
                <div class="bg-white rounded-lg p-4 space-y-4 ">
                    <div class="flex justify-between">
                        <div class="font-bold">Visualisation du fichier</div>
                        <BaseIcon icon="setting" class="w-6 h-6" @click="visible = false"></BaseIcon>
                        </div>
                    <embed
                :src="url"
            
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"/>
                </div>
               
            </template>
           
        </BaseDialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                visible : false
            }
        },
        props:{
            url : {
                type : String
            },
            show : {
                type : Boolean,
                value : false
            },
            width:{
                type: String,
                value: '100%'
            },
            heigth:{
                type: String,
                value: '100%'
            }
        },

        mounted() {
            this.visible = this.show
        },
}
</script>

<style lang="scss" scoped>

</style>