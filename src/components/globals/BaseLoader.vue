<template>
    <div class="flex flex-col space-y-4 items-center justify-center" id="loader-card">
        <div class="loader"> </div>
        <div>Chargement en cours</div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>


<style scoped>
#loader-card{
    position:absolute;
    top:50%;
    left: 50%;
}
.loader {
    
  border: 16px solid white;
  border-radius: 50%;
  border-top: 16px solid #00499D;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>