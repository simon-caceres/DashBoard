import Vue from 'vue';
import Router from 'vue-router';
//import HelloWorld from '@/components/HelloWorld';
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Actors from '../views/Actors.vue'
import Gestion from '../views/Gestion.vue'
import Influence from '../views/Influence.vue'
import Riesgo from '../views/Riesgo.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/actores',
      name: 'actors',
      component: Actors
    },
    {
      path:'/gestion',
      name: 'gestion',
      component: Gestion
    },
    {
      path:'/influencia',
      name: 'influencia',
      component: Influence
    },
    {
      path:'/riesgo',
      name: 'riesgo',
      component: Riesgo
    }
  ]
});
