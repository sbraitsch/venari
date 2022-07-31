import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDragScroll from 'vue-dragscroll'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowUp, faArrowDown, faFileExport, faTerminal, faUserSecret, faDungeon, faPersonHiking, faMap, faBrain, faArchive, faFile} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWpexplorer } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faArrowUp, faArrowDown, faFileExport, faGithub, faTerminal, faUserSecret, faDungeon, faPersonHiking, faMap, faWpexplorer, faBrain, faArchive, faFile)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueDragScroll)
app.use(createPinia())
app.use(router)

app.mount('#app')
