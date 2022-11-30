import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tienda from '../views/Tienda.vue'
import Registrarse from '../views/Registrarse.vue'
import Login from '../views/Login.vue'
import Documento from '../views/Documento.vue'
import subirDocumento from '../views/subirDocumento.vue'
import Publicaciones from '../views/Publicaciones.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Tienda',
    name: 'tienda',
    component: Tienda
  },
  {
    path: '/Registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Documento/:id',
    name: 'Documento',
    component: Documento
  },
  {
    path: '/Documento/Subir',
    name: 'subirDocumento',
    component: subirDocumento
  },
  {
    path: '/Documento/misDocumentos',
    name: 'Publicaciones',
    component: Publicaciones
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
