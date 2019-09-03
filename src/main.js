// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// 引入 MUI 的样式
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

Vue.config.productionTip = false

// 使用时间插件 moment
// 1.导入
import moment from 'moment'

// 使用全局的过滤器
// 1.定义全局的过滤器
// 2.使用时间插件来格式化数据
// 3.到对应的地方，使用管道符调用此过滤器
Vue.filter('dateFormat', function(datastr, pattern='YY-MM-DD hh:mm:ss'){
  return moment(datastr).format(pattern)
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
