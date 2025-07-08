<template>
  <v-app>
    <v-main class="scroll-area">
      <PortfolioAnalysis />
    </v-main>
    <BottomNavigation />
  </v-app>
</template>

<script setup>
import PortfolioAnalysis from "./components/PortfolioAnalysis.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
</style>
