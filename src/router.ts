import { createRouter, createWebHistory } from "vue-router";
import PersonalInformations from "./auth/PersonalInformations.vue";
import Signup from "./auth/Signup.vue";
import Login from "./auth/Login.vue";
import VerifyNumber from "./auth/VerifyNumber.vue";
import Success from "./auth/Success.vue";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import FriendArea from "./pages/FriendArea.vue";
const routes = [
  { path: "/", redirect: "/login" },

  /* Personal‑Info page */
  {
    path: "/personalinformations",
    name: "PersonalInformations",
    component: PersonalInformations,
  },

  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/verify", name: "verify", component: VerifyNumber },
  { path: "/success", name: "success", component: Success },
  { path: "/home", name: "home", component: Home },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/friends", name: "friends", component: FriendArea },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
