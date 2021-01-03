import Vue from 'vue'
import App from './App.vue'
import Highcharts from 'highcharts'

Vue.config.productionTip = false

window.Highcharts = Highcharts

new Vue({
  render: (h) => h(App),
}).$mount('#app')
