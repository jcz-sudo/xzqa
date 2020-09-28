<template>
  <div class="article">
    <div class="article-title">
     {{subject}}
    </div>
    <div class="article-wrapper">
      <img src="@/assets/images/img1.jpg" alt="">
      <p>
        {{description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
 props:["subject","description","img"]
}
</script>

<style>
.article{
  /* height: 100px; */
  border: 1px solid #ccc;
  padding: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #aaa;
}
.article-wrapper{
  display: flex;
  height: 5.6rem;
}
.article-title{
  width: 70%;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: .5rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.article-wrapper img{
  width: 30%;
  height: auto;
  border-radius: 5%;
  height: 100%;
}
.article-wrapper p{
 width: 70%;
 text-indent: 2em;
 padding-left: .5rem;
 box-sizing: border-box;
 height: 100%;
 font-size: 1rem;
 line-height: 1.4;
 /* 多行文本溢出隐藏 */
 display: -webkit-box;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: 4;
 overflow: hidden;
 text-overflow:ellipsis;
}
</style>