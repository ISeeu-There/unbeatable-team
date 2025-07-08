<template>
  <v-app id="app-root">
    <!-- fixed header -->
    <UsersHeader />

    <UsersSearch />

    <v-main class="scroll-area">
      <UsersActive />

      <router-view />

      <UsersCard />
    </v-main>
  </v-app>
</template>

<script setup>
import BottomNavigation from "./components/BottomNavigation.vue";
import UsersActive from "./components/UsersActive.vue";
import UsersCard from "./components/UsersCard.vue";
import UsersHeader from "./components/UsersHeader.vue";
import UsersSearch from "./components/UsersSearch.vue";
</script>
