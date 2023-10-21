import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const myTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#ffffff",
      surface: "#000000",
      primary: "#000000",
      "primary-darken-1": "#000000",
      secondary: "#000000",
      "secondary-darken-1": "#000000",
      error: "#000000",
      info: "#000000",
      success: "#000000",
      warning: "#000000",
    },
  };

const vuetify = createVuetify({
    theme: {
        defaultTheme: "light",
        themes: {
          myTheme,
        },
      },
    components,
    directives,
})

// Pinia
const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
