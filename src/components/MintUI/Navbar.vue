<template>
   <mt-navbar v-model="selected">
        <mt-tab-item id="ui">UI</mt-tab-item>
        <mt-tab-item id="shopping">电商</mt-tab-item>
        <mt-tab-item id="web">网页</mt-tab-item>
        <mt-tab-item id="inter">交互</mt-tab-item>
   </mt-navbar>
 
</template>

<script>
export default {
  data(){
    return {
      selected:"ui",
      tab:"index"
    }
  },
  watch:{
    selected(newVal){
        this.$emit("select",newVal)
      }
    }
}
</script>

<style scoped>
</style>