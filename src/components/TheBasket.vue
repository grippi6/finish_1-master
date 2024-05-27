<script>
import CardBascet from '@/components/CardBasket.vue';


export default {
    data(){
        // pizza[],
    },
  components:{CardBascet,TheHeader},
//   mounted:{
//     pizza = P
//   }
}

</script>
<template>
    <TheHeader></TheHeader>
    <div class="wrapper">
        
        <div class="container">
           <CardBascet ></CardBascet> 
        </div>
    </div>
</template>


<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    margin-top: 10em;
    margin-bottom: 10em;
}

.container {
   
    width: 80%;
    height: 1000px;
    border: 1px solid black;
}

</style>