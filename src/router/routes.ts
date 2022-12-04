import { RouteRecordRaw } from "vue-router";

export const menuRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'Home',
      icon: 'home'
    },
  }
];

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: 'Home' },
    component: () => import("@/views/container.vue"),
    children: menuRoutes
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
  },
  // 匹配不到的路由都跳转到home页，也可以自定义一个404页
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];