<!-- App.vue -->
<template>
  <v-app id="app-root">
    <!-- fixed header -->
    <HeaderSection />

    <SearchSection />

    <v-main class="scroll-area">
      <router-view />

      <TeamCardsSection />
    </v-main>
  </v-app>
</template>

<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import SearchSection from "./components/SearchSection.vue";
import TeamCardsSection from "./components/TeamCardsSection.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
</script>

<style>
html,
body,
#app,
.v-application,
#app-root {
  height: 100%;
  margin: 0;
}

#app-root {
  display: flex;
  flex-direction: column;
}

.scroll-area {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 16px 110px;
}
</style>
