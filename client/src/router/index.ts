import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'guessGame',
        },
        {
            path: '/guessGame',
            name: 'guessGame',
            component: () => import('@/views/guess-game/index.vue'),
            meta: {
                requiresAuth: false,
            },
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
