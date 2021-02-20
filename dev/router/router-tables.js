const tableRoutes = [
    {
        path: '/regular-table',
        name: 'Regular table',
        component: () => import('../views/Tables/RegularTable.vue')
    },
    {
        path: '/data-table',
        name: 'Data table',
        component: () => import('../views/Tables/DataTable.vue')
    },
]

export default tableRoutes