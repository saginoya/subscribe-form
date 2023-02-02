import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/confirm",
      name: "confirm",
      component: () => import("../views/ConfirmView.vue"),
    },
    {
      path: "/thanks",
      name: "thanks",
      component: () => import("../views/ThanksView.vue"),
    },
  ],
});

export default router;
