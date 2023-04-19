import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import index from '~/pages/home/index.vue'
import Login from '~/pages/login/index.vue'
import NotFound from '~/pages/404.vue'
const routes = [{
    path:"/",
    component: index
},
{
    path:"/Login",
    component: Login
},
{
    path:'/:pathMatch(.*)*',
    component: 'NotFound', component: NotFound
},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router