const badgesRoutes = [
    {
        path: '/badges',
        name: 'Badges',
        component: () => import('../views/Badges/Badges.vue')
    },
    // {
    //     path: '/navbar',
    //     name: 'NavBar',
    //     component: () => import('../views/Navs/NavBar.vue')
    // },
]

export default badgesRoutes