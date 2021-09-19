import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Join_agree from '../views/Join_agree.vue'
import Join from '../views/Join.vue'
import Movie from '../views/Movie.vue'
import Reserve from '../views/Reserve.vue'
import Movie_be_schedule from '../views/Movie_be_schedule.vue'
import Movie_chart from '../views/Movie_chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/join_agree',
    name: 'Join_agree',
    component: Join_agree
  },

  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },

  {
    path: '/reserve',
    name: 'Reserve',
    component: Reserve
  },
  {
    path: '/movie_be_schedule',
    name: 'Movie_be_schedule',
    component: Movie_be_schedule
  },
  {
    path: '/movie_chart',
    name: 'Movie_chart',
    component: Movie_chart
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
