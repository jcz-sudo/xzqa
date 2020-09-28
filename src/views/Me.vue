<template>
  <div class="me">
   <mt-header title="关于我的" fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <div slot="right">
            <router-link to="/register">注册</router-link>
            <router-link to="/login">登录</router-link>
          </div>
      </mt-header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
