import Vue from 'vue'
import VueRouter from 'vue-router'

import buttonRoutes from "./router-buttons";

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        // path: '/sidenav',
        name: 'SideNav',
        component: () => import('../views/SideNav.vue')
    },
    {
        path: '/navbar',
        name: 'NavBar',
        component: () => import('../views/NavBar.vue')
    },
    {
        path: '/colors',
        name: 'Colors',
        component: () => import('../views/Colors.vue')
    },
    {
        path: '/tiles',
        name: 'Tiles',
        component: () => import('../views/Tiles.vue')
    },
    {
        path: '/tables',
        name: 'Tables',
        component: () => import('../views/Tables.vue')
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: () => import('../views/Buttons.vue'),
        children: []
    },

    {
        path: '/inputs',
        name: 'Inputs',
        component: () => import('../views/Inputs.vue')
    },
    {
        path: '/modals',
        name: 'Modals',
        component: () => import('../views/Modals.vue')
    },
    {
        path: '/gauges',
        name: 'Gauges',
        component: () => import('../views/Gauges.vue')
    },
    {
        path: '/cards',
        name: 'Cards',
        component: () => import('../views/Cards.vue')
    },
    {
        path: '/grids',
        name: 'Grids',
        component: () => import('../views/Grids.vue')
    },
    // {
    //     path: '/toolbars',
    //     name: 'Tools',
    //     component: () => import('../views/Toolbars.vue')
    // },
    {
        path: '/calendars',
        name: 'Calendar',
        component: () => import('../views/Calendars.vue')
    },
]

routes = routes.concat(buttonRoutes)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
