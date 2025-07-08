import type { RouteRecordRaw } from "vue-router";
import PersonalInformations from "../auth/PersonalInformations.vue";
import Signup from "../auth/Signup.vue";
import Login from "../auth/Login.vue";
import VerifyNumber from "../auth/VerifyNumber.vue";
import Success from "../auth/Success.vue";
import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";
import FriendArea from "../pages/FriendArea.vue";

export const routes: RouteRecordRaw[] = [
  /* Personal‑Info page */
  {
    name: "Anonymous",
    component: () => import("../pages/Anonymous.vue"),
    path: "",
    children: [
      { path: "", redirect: "/login" },
      {
        path: "/personalinformations",
        name: "PersonalInformations",
        component: PersonalInformations,
      },

      { path: "/signup", name: "signup", component: Signup },
      { path: "/login", name: "login", component: Login },
      { path: "/verify", name: "verify", component: VerifyNumber },
      { path: "/success", name: "success", component: Success },
    ],
  },
  {
    name: "Authenticated",
    component: () => import("../pages/Authenticated.vue"),
    path: "/u",
    children: [
      { path: "/home", name: "home", component: Home },
      { path: "/portfolio", name: "portfolio", component: Portfolio },
      { path: "/friends", name: "friends", component: FriendArea },
    ],
  },
];
