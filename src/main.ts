import { createApp } from "vue"
import { router } from "./router/router"
import store from './store'
import App from "./App.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/css/hover.min.css'
import '../static/css/monokai.css'
import '../static/css/icons.css'
import '../static/css/personal.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

const app = createApp(App)
app.use(router)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
