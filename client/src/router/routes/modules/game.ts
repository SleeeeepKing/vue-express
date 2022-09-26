export default {
    path: '/game/',
    name: 'game',
    redirect: {
        name: 'guessGame'
    },
    meta: {
        requiresAuth: false,
    },
    children:[
        {
            path: 'guessGame',
            name: 'guessGame',
            component: () => import('@/views/guess-game/index.vue'),
        }
    ]

}