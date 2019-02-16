import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

Vue.prototype.$axios = axios
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//       el.style.color = '#'+Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value==='wide'){
      el.style.maxWidth = '2000px'
    }
    if (binding.arg ==='col'){
      el.style.background= '#e3e2e2'
    }
  }
})
// Vue.filter('to-uppercase',data=>{
//    return data.toUpperCase()
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
