import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inbox from '../components/Inbox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { // exemple of nested route for display of various categories of messages
        path: 'inbox', // possibility to reuse inbox component with different url to use as endpoint in function to fetch message
        component: Inbox
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
