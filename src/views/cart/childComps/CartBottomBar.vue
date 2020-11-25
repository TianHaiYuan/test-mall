<!--  -->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        @click.native="checkClick"
        class="check-button"
      >
      </check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>

    <div class="caculate" @click="calcClick">去计算：({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //   return  this.$store.state.cartList.filter(item => !item.checked).length==0
      if (this.$store.state.cartList.length === 0) {
        return false;
      }
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        // 部分或全部不选中
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.$store.state.cartList.find(item=>item.checked)) {
        this.$toast.show("请选择购买的商品！");
      }
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.bottom-bar {
  position: relative;
  display: flex;

  height: 40px;
  line-height: 40px;

  font-size: 14px;

  background-color: #eee;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.caculate {
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>