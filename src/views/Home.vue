<template>
  <div class="home">
    <!-- 顶部导航 -->

    <div :class="{top_header:isFixed}">
      <mt-header title="学前端,到学问">
          <div slot="right">
            <router-link to="/register">注册</router-link>
            <router-link to="/login">登录</router-link>
          </div>
      </mt-header>

      <my-navbar @select="selectFn"></my-navbar>
    </div>

    <!-- 面板部分 -->
    
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="ui" style="margin-bottom: 55px" :class="{itemMargin:isFixed}">
        <my-article></my-article>
        <my-article></my-article>
        <my-article></my-article>
        <my-article></my-article>
        <my-article></my-article>
        <my-article></my-article>
      </mt-tab-container-item>
      <mt-tab-container-item id="shopping">222</mt-tab-container-item>
      <mt-tab-container-item id="web">333</mt-tab-container-item>
      <mt-tab-container-item id="inter">444</mt-tab-container-item>
    </mt-tab-container>

   
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/MintUI/Header"
import MyNavbar from "@/components/MintUI/Navbar"
import MyArticle from "@/components/Article"
export default {
  name: 'Home',
  data(){
    return {
      active:"ui",
      isFixed:false
    }
  },
  components: {
    MyHeader,MyNavbar,MyArticle
  },
  methods:{
    selectFn(data){
      this.active = data;
    },
    scrollHandle(e){
      var top = e.target.scrollingElement.scrollTop;
      if(top>=40){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    }
  },
  mounted() {
    window.addEventListener("scroll",this.scrollHandle),
    this.axios.get("/category",(res)=>{
      console.log(res)
    })
  },
}
</script>
<style>
  .home .top_header{
    position: fixed;
    left: 0;
    right:0;
    top: -40px;
    z-index: 999;
  }
  .home .mint-tab-container-item{
    padding: .5rem;
    padding-bottom:0;
    margin-bottom: 40px;
    box-sizing: border-box;
  }
  .mint-header-button a{
    text-decoration: none;
    color: #fff;
    margin-left: 5px;
  }
  .itemMargin{
    margin-top: 90px;
  }
</style>