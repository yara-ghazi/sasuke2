import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import vueRouter from 'vue-router'
import Routes from './router'

Vue.use(vueRouter);
const Router=new vueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router,
  store:store
})
