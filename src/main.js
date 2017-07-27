// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
});
