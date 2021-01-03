<template>
  <div id="app">
    <div>
      <textarea v-model="js" placeholder="add multiple lines"></textarea>
      <textarea v-model="html" placeholder="add multiple lines"></textarea>
    </div>
    <div><button v-on:click="redrawChart">Update</button></div>
    <div>
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import sampleHtml from 'raw-loader!./assets/custom-charts.html'
import sampleJs from 'raw-loader!./assets/custom-charts.js.template'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      id: 'generated_id',
      html: sampleHtml,
      js: '',
      script: {},
      chartData: [],
    }
  },
  mounted() {
    this.id = 222123
    this.js = `window.render_${this.id} = ${sampleJs}`
    window.getChartValues = function() {
      return [
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ]
    }
    this.loadJs()
  },
  methods: {
    loadJs() {
      this.script = document.createElement('script')
      this.script.type = 'text/javascript'
      this.script.innerHTML = this.js
      document.head.appendChild(this.script)
      window[`render_${this.id}`]([
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ])
    },
    redrawChart() {
      console.log('update chart')
      document.head.removeChild(this.script)
      this.loadJs()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
textarea {
  height: 400px;
  width: 600px;
}
</style>
