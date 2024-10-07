import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/index.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: () => import("../pages/about.vue") },
    { path: "/address", component: () => import("../pages/address.vue") },
    { path: "/courses", component: () => import("../pages/courses/index.vue") },
    {
      path: "/courses/:id",
      component: () => import("../pages/courses/[id].vue"),
    },
    {
      name: "member",
      path: "/member",
      component: () => import("../pages/member.vue"),
      children: [
        {
          name: "member",
          path: "",
          component: () => import("../pages/member/index.vue"),
        },
        {
          name: "higher",
          path: "higher",
          component: () => import("../pages/member/higher.vue"),
        },
        {
          name: "medium",
          path: "medium",
          component: () => import("../pages/member/medium.vue"),
        },
        {
          name: "lowLevel",
          path: "lowLevel",
          component: () => import("../pages/member/lowLevel.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
