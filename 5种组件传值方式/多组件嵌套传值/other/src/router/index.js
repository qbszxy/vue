import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home.vue'
import props from '@/views/props/index.vue'
import eventBus from '@/views/eventBus/index.vue'
import provideInject from '@/views/provideInject/index.vue'
import attrsListeners from '@/views/attrsListeners/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/props',
    name: 'props',
    component: props
  },
  {
    path: '/eventBus',
    name: 'eventBus',
    component: eventBus
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: provideInject
  },
  {
    path: '/attrsListeners',
    name: 'attrsListeners',
    component: attrsListeners
  }
]

const router = new VueRouter({
  routes
})

export default router
