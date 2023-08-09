import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import Trend from 'vue3trend'
import TrendChart from 'vue-trend-chart'

loadFonts()

createApp(App)
  .use(router)
  .use(Trend)
  .use(TrendChart)
  .mount('#app')
