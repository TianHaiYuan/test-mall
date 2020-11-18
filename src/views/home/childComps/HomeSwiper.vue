<!--  -->
<template>
 <swiper>
      <swiper-item v-for="item in banners" >
          <a :href="item.link">
             <img :src="item.image" alt="" />
          </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
 export default {
  name:"HomeSwiper",
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      Swiper,
      SwiperItem
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

</style>