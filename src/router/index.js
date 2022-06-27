import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/home/Home.vue'
// import ActivityDetail from '../views/activityDetail/ActivityDetail.vue'
// import Login from '../views/userCenter/login.vue'

const routes = [{
        path: '/', //路径
        redirect: '/home' //重定向  如果访问/结尾，就重定向到/home页面去
    },
    {
        path: '/home',
        component: () =>
            import ( /*webpackChunkName:'home'*/ '../views/home/Home.vue')
    },
    {
        path: '/activityDetail',
        component: () =>
            import ( /*webpackChunkName:'activityDetail'*/ '../views/activityDetail/ActivityDetail.vue')

    },
    {
        path: '/userCenter',
        component: () =>
            import ( /*webpackChunkName:'userCenter'*/ '../views/userCenter/Login.vue')


    }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(), //createWebHistory
    routes, // `routes: routes` 的缩写
})
export default router;