import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiftsView from '../views/GiftsView.vue'
import FriendView from '../views/FriendView.vue'
import DesignationOfGifts from '../views/DesignationOfGifts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/friend',
      name: 'friend',
      component: FriendView
    },
    {
      path: '/gift',
      name: 'gift',
      component: GiftsView
    },
    {
      path: '/designation',
      name: 'designation',
      component: DesignationOfGifts
    }
  ]
})

export default router
