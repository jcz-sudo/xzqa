<template>
   <mt-navbar v-model="selected">
        <mt-tab-item id="ui">{{category[0]}}</mt-tab-item>
        <mt-tab-item id="shopping">{{category[1]}}</mt-tab-item>
        <mt-tab-item id="web">{{category[2]}}</mt-tab-item>
        <mt-tab-item id="inter">{{category[3]}}</mt-tab-item>
   </mt-navbar>
 
</template>

<script>
export default {
  data(){
    return {
      selected:"ui",
      tab:"index",
      category:[]
    }
  }, 
  watch:{
    selected(newVal){
        this.$emit("select",newVal)
    }
  },
  mounted(){
    this.$http.get("/article/category")
    .then((res)=>{
      const data = res.data.results;
      for(var v of data){
        this.category.push(v.category_name)
      }
    }),
    window.addEventListener("scroll",this.scrollHandle)
  }
}
</script>

<style scoped>
</style>