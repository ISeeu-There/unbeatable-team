import { createRouter, createWebHistory } from "vue-router";
import PersonalInformations from "./auth/PersonalInformations.vue";
import Signup from "./auth/Signup.vue";
import Login from "./auth/Login.vue";
import VerifyNumber from "./auth/VerifyNumber.vue";
import Success from "./auth/Success.vue";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import FriendArea from "./pages/FriendArea.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
