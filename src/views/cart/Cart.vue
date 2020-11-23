<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar'
import { mapGetters } from 'vuex';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar

  },
  computed: {
       //两种语法
     ...mapGetters(['cartLength','cartList'])

  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.cart{
     height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>