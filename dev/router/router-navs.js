const navRoutes = [
    {
        path: '/sidenav',
        name: 'SideNav',
        component: () => import('../views/Navs/SideNav.vue')
    },
    {
        path: '/navbar',
        name: 'NavBar',
        component: () => import('../views/Navs/NavBar.vue')
    },
]

export default navRoutes