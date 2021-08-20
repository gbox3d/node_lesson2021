<template>
  <div>
    <h1>Write Memo</h1>
    
    <h3>title </h3>
    <input type="text" v-model="titleVal">
    <h5>text</h5>
    <input type="text" v-model="textVal">
    <hr>
    <button @click="onWriteMemo" >write</button>


  </div>
</template>
<script>
export default {
  name: "WriteMemo",
  data() {
    return {
      titleVal: "",
      textVal: "",
    };
  },
  methods: {
      onWriteMemo() {

          console.log(this.titleVal,this.textVal);

      }
  },
  created() {},
};
</script>
<style scoped>
</style>