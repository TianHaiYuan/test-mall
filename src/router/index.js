import Vue from 'vue'
import VueRouter from 'vue-router'

//动态导入
const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const Cart=()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')

Vue.use(VueRouter)

const routes=[
{
  path:'',
  redirect:'/home'
},
{
  path:'/home',
  component:Home
},
{
  path:'/category',
  component:Category
},
{
  path:'/cart',
  component:Cart
},
{
  path:'/profile',
  component:Profile
}
]
const router=new VueRouter({
  routes,
  mode:'history'
})

export default router;
