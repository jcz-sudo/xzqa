<template>
  <div>
    <router-view/>
     <!-- 底部导航部分 -->

    <mt-tabbar v-model="tab" fixed>
      <mt-tab-item id="home">
        <img src="./assets/images/index_disabled.png" alt="" slot="icon" v-if="tab!=='home'">
         <img src="./assets/images/index_enabled.png" alt="" slot="icon" v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id="film">
         <img src="./assets/images/film_disabled.png" alt="" slot="icon" v-if="tab!=='film'">
         <img src="./assets/images/film_enabled.png" alt="" slot="icon" v-else>
        电影
      </mt-tab-item>
      <mt-tab-item id="me">
         <img src="./assets/images/me_disabled.png" alt="" slot="icon" v-if="tab!=='me'">
         <img src="./assets/images/me_enabled.png" alt="" slot="icon" v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tab:"home"
    }
  },
  watch:{
    tab(newVal){
      //.catch(e=>{})是用于捕捉错误
      this.$router.push(`/${newVal}`).catch(e=>{})
    }
  }

}
</script>
