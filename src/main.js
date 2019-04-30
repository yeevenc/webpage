// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import HelloWorld from './components/HelloWorld'
import TitleBar from './components/TitleBar'

const Bar = { template: '<div><router-view/></div>' }

/* eslint-disable no-new */
Vue.component('HelloWorld', HelloWorld)
Vue.component('titlebar', TitleBar)
new Vue({
  el: '#app',
  router,
  components: { Bar },
  template: '<Bar/>'
})
