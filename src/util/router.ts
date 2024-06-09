import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from './views/Home.vue';
// import About from './views/About.vue';

// 懒加载
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../components/Home.vue"),
        meta: {
            title: "Home",
        },
    },
    {
        path: "/Home",
        component: () => import("../components/Home.vue"),
        meta: {
            title: "Home",
        },
    },
    {
        path: "/Permeation",
        component: () => import("../views/penetration/penetration.vue"),
        meta: {
            title: "Permeation",
        },
    },
    {
        path: "/Portscan",
        component: () => import("../views/penetration/Portscan.vue"),
        meta: {
            title: "Portscan",
        },
    },
    {
        path: "/Dirsearch",
        component: () => import("../views/penetration/Dirsearch.vue"),
        meta: {
            title: "Dirsearch",
        },
    },
    {
        path: "/Fofa",
        component: () => import("../views/SpaceEngine/Fofa.vue"),
        meta: {
            title: "Fofa",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
