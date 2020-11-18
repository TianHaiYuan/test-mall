<!--  -->
<template>
<div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.index"></goods-list-item>
    
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

 export default {
  name:"GoodsList",
  components:{
      GoodsListItem
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
}

</style>