import { createRouter, createWebHistory } from 'vue-router';
import game from "@/router/routes/modules/game";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'dashboard',
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            meta: {
                requiresAuth: false,
            },
            children:[
                game
            ]
        },

    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
