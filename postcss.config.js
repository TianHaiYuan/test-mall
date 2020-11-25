module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗宽度
      viewportHeight: 667,//视窗高度
      unitPrecision: 5,  //指定‘px’转换为视窗单位值得小数位数（很多时候无法整除）
      viewportUnit: 'vw',//指定需要转换成的视窗单位
      selectorBlackList: ['ignore', 'tab-bar'], //指定不需要转换的类
      minPixelValue: 1, //小于等于1px 不转换
      mediaQuer: false ,  //允许在媒体查询中转化px
      exclude: [/TabBar/]   //正则表达式   

    },
  }
}

//js正则 /正则规则/ 
// 1. ^abc  必须以abc开头
//2. abc$   必须以abc结尾
//3.
 