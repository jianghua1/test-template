import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
