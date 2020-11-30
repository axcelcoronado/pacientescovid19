import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pacientes',
    name: 'Pacientes',

    component: () => import('../views/Pacientes.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',

    component: () => import('../views/Editar.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Resgistro',

    component: () => import('../views/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
