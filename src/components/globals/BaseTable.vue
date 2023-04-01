<template>
    <div class="w-full overflow-x-auto" style="font-size:14px">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th v-for="title in titles" :key="title" class="py-4 border-b-2 text-left pl-4 text-grey">{{title.title}}</th>
                </tr>
            </thead>
            <tbody class="bg-white"  v-if="data.length != 0">
                <tr v-for="element in data" :key="element" class="hover:bg-blue-100" @mouseenter="currentElement = element">
                    
                    <td v-for="title in titles" :key="title.name"  class="py-6 text-grey border-b-2 text-left pl-4" >
                        <slot :name="title.name" :element="element" v-if="title.name != 'action'">
                             {{element[title.name]}}
                        </slot>
                        
                        <slot name="action" :element="element" v-else-if="isEqual(element,currentElement)">
                        </slot>
                    </td>
                 
                </tr>
            </tbody>
            <tbody class="bg-white" v-else>
                <tr>
                    <td :colspan="titles.length"> 
                        <div class="w-full text-center p-8 shadow">
                            Aucun élément trouvé
                        </div>
                    </td>
                </tr>
            </tbody>
           
        </table>
    </div>
</template>

<script>
    import isEqual from 'lodash/isEqual'
    export default {
        data(){
            return {
                currentElement : this.data[0]
            }
        },
        methods:{
            isEqual
        },
        props : {
            data : {
                type: Array
            },
            titles : {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>