import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/demo",
  //   name: "Demo",
  //   component: () =>
  //     import(/* webpackChunkName: "Demo" */ "@/components/Demo/Demo.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
