import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
import router from './router'



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})