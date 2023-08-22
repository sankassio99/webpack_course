// helloVue/src/bootstrap.js
import { createApp } from 'vue'
import App from './App.vue'
import mainCss from './main.css';

const mount = (el) => {
    const app = createApp(App)
    app.mount(el)
}

export { mount }
