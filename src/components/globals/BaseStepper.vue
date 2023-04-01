<template>
    <div class="flex flex-col">
        <div v-for="(item,i) in items" :key="item" class="cursor-pointer" @click="changeSelectedIndex(i)">
            <div class="flex space-x-8 items-center text-lg">
                 <div
                    class="rounded-full w-8 h-8 flex items-center justify-center text-sm"
                    :class="{
                        'text-white bg-primary': currentIndex == i,
                        'bg-blueLight2': item.isChecked == true && currentIndex != i,
                        'text-grey-50 border border-grey-50 font-bold':
                            currentIndex != i,
                    }"
                >
                    <BaseIcon icon="check-blue" v-if="item.isChecked && currentIndex != i"></BaseIcon>
                    <span v-else>{{ i + 1 }}</span>
                </div>
                <div class="text-base hidden md:block" :class="{'font-bold text-primary':currentIndex == i,'font-semibold text-grey-80':currentIndex != i}" >{{item.name}}</div>
            </div>
            <div class="border-l-2 border-grey-50 border-dashed h-8 mx-4 my-1" v-if="i != items.length - 1"></div>
        </div>





    </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex : 0
        }
    },
    props: {
        items: {
            type:Array
        },
        direction: {
            type:String,
            default:"horizontal"
        },
        selectedIndex: {
            type:Number,
            default:0
        },
    },

    methods:{
        changeSelectedIndex(index){
            console.log("current index",index)
            this.currentIndex = index
            //this.$emit("input",index)
            this.$emit("change",index)
        }
    },

    updated(){
        this.currentIndex = this.selectedIndex 
    }
};
</script>

<style lang="scss" scoped></style>
