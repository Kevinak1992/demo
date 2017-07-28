// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './components/goods/Goods';
import Ratings from './components/ratings/Ratings';
import Seller from './components/seller/Seller';

Vue.config.productionTip = false;

Vue.use(VueRouter);

var routes = [{ path: '/goods', component: Goods }, { path: '/ratings', component: Ratings }, { path: '/seller', component: Seller }];

var router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map