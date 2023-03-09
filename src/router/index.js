import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ClickAndCollect from '../views/Click&Collect.vue';
import Panier from '../views/Panier.vue';
import Options from '../views/Options.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/~longuechaux1/sae401_sla/O-tacos/dist/',
      name: 'Home',
      component: Home
    },
    {
      path: '/~longuechaux1/sae401_sla/O-tacos/dist/Click&Collect',
      name: 'Click&Collect',
      component : ClickAndCollect
    },

    {
      path: '/~longuechaux1/sae401_sla/O-tacos/dist/Panier',
      name: 'Panier',
      component : Panier
    },
    {
      path: '/~longuechaux1/sae401_sla/O-tacos/dist/Options/:id',
      name: 'Options',
      component : Options
    }
  ]
})

export default router
