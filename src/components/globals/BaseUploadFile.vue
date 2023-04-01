<template>
  <div
    class="flex items-center space-x-2  bg-fadeGreen border-success md:space-x-4 rounded-lg border w-full px-2.5 text-xs py-1.5"
  >

    <div class="rounded bg-grey-50 px-1.5 py-2 h-full text-white">{{fileExtension}}</div>

    <div class="flex flex-col space-y-1 w-full">
      <div class="flex justify-between">
        <div class="font-bold">{{ file.name }}</div>
        <div class="italic" style="font-style: italic">Terminé</div>
      </div>
      <div class="flex w-full rounded" style="background-color: #c2cbd6">
        <div class="h-1 w-full rounded" style="background-color: #287d3c"></div>
      </div>
      <div class="flex justify-between">
        <div style="color: #5f738c">Taille: <span>{{fileSize}}</span></div>
        <div><span class="bold">100%</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fileSize() {
      var i = Math.floor(Math.log(this.file.size) / Math.log(1024));
      return (
        (this.file.size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i]
      );
    },
    fileExtension(){
        if(this.file){
          const namePath = this.file.name.split('.')
          return namePath.pop()
        }
        return ""
        
    }
  },
  props: {
    file: {},
  },

  mounted(){
      console.log('file',this.file)
  }
};
</script>

<style lang="scss" scoped></style>
