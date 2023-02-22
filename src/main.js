import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import vuex from "vuex"
import store from './store'
import axios from "axios";

const app = createApp(App)
app.use(router)
app.use(vuex)
app.use(store)
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

app.mount('#app')

// createApp(App).use(router).use(vuex).use(store).mount('#app')
