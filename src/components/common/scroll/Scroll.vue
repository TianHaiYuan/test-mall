<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      console.log("---");
      this.scroll && this.scroll.refresh();
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    //监听滚动位置

    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    if (this.pullUpLoad) {
      //监听上拉事件
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
       })
    }
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>