import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component:()=> import('../src/components/home.vue')
    },
    // {
        // path:'/natija',
        // component:()=> import('../src/components/natija.vue')
    // }
]
    

let router =createRouter({
    routes:routes,
    history:createMemoryHistory()
})


export default router