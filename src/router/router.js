import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import AddExpese from "../pages/AddExpese.vue";
const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/add-expense", name: "addExpese", component: AddExpese },
  { path: "/about", name: "about", component: AboutPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
