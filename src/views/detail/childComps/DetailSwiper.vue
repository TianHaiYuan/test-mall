<!--  -->
<template>

    <swiper class="detail-swiper">
        <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

 export default {
  name:"DetailSwiper",
  props:{
      topImages:{
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
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
</style>