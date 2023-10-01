import { createRouter, createWebHistory } from 'vue-router'
import DataMethods from "../pages/DataMethods.vue"
import ComputedProperties from "../pages/ComputedProperties.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DataMethods,
    },
    {
      path: "/computed-properties",
      component: ComputedProperties,
    }
  ]
})

export default router
