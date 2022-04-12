import Vue from "vue";
import VurRouter from 'vue-router'

const Home = () => import('../views/Home')

Vue.use(VurRouter)

const router = new VurRouter({
  routes: [
    {
      path: '',
      redirect: '/1'
    },

    {
      path: '/1',
      component: Home
    }
  ]
})



export default router