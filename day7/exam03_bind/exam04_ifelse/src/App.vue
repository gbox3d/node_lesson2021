<template>
  <div>
    <h1 :class="{green: coinValue >= 50 ,yellow : coinValue < 50 && coinValue > 10,red : coinValue < 10}" >{{coinValue}}</h1>  
    <input v-model="coinValue" >
  </div>

  <div>
    <p v-if="coinValue >= 50" > 충분합니다 </p>
    <p v-else-if="coinValue < 50 && coinValue >= 10"> 부족합니다</p>
    <p v-else >너무 부족합니다.</p>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      coinValue : 0
    }
  }
}
</script>

<style scoped>
div {
  border: solid 1px black;
}
.red {
  color: red;
}
.yellow {
  color: yellow;
}
.green {
  color: green;
}
h1 {
  text-align: center;
}


</style>
