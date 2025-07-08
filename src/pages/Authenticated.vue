<template>
  <div class="authenticated-container">
    <RouterView />
    <BottomNavigation />
  </div>
</template>

<script setup lang="ts">
import BottomNavigation from "./components/BottomNavigation.vue";
</script>
