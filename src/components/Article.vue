<template>
  <div class="article">
    <div class="article-title">
      微信红包的随机算法是怎样实现的
    </div>
    <div class="article-wrapper">
      <img src="@/assets/images/img1.jpg" alt="">
      <p>
        随着国内智能手机用户增长放缓，新应用或游戏获取用户、提升付费转化率的成本越来越高。走出中国市场，去海外开辟更广阔的用户群成了互联网公司和开发者自然而然的选择。
        实际上，在过去几年里已经有不少在海外获得不错成绩的中国公司，比如猎豹、APUS、久邦数码等等。他们的产品有个共同点，是工具属性极强，很容易在初期凭借几个不可或缺的核心功能获得一大批用户，但是后续增长乏力。
      </p>
    </div>
  </div>
</template>

<script>
export default {

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