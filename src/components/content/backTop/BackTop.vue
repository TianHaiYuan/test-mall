<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
}
.back-top img {
  height: 43px;
  width: 43px;
}
</style>