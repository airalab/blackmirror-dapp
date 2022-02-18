import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./views/Main";
import Users from "./views/Users";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/users",
      name: "users",
      component: Users
    }
  ]
});

export default router;
