import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Home from "../views/Home.vue";
import RecipeItem from "../views/RecipeItem.vue";
import CreateRecipe from "../views/CreateRecipe.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Item",
    name: "RecipeItem",
    component: RecipeItem,
  },
  {
    path: "/Create",
    name: "CreateRecipe",
    component: CreateRecipe,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
