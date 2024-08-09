import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import( "@/views/BrazilView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import( "@/views/HawaiiView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import( "@/views/JamaicaView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import( "@/views/PanamaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
