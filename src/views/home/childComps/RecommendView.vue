<!--  -->
<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt=""/>
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>