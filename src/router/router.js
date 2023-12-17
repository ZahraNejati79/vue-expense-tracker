import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ReportsPage from "../pages/ReportsPage.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import AddExpese from "../pages/AddExpese.vue";
const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/reports", name: "reports", component: ReportsPage },
  { path: "/category", name: "category", component: CategoryPage },
  { path: "/profile", name: "profile", component: ProfilePage },
  { path: "/add-expense", name: "addExpese", component: AddExpese },
  { path: "/about", name: "about", component: AboutPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
