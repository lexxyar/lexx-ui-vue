const buttonRoutes = [
    {
        path: '/standard-buttons',
        name: 'Standard buttons',
        component: () => import('../views/Buttons/StandardButtons.vue')
    },
    {
        path: '/pill-buttons',
        name: 'Pill buttons',
        component: () => import('../views/Buttons/PillButtons.vue')
    },
]

export default buttonRoutes