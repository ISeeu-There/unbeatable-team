<script setup lang="ts"></script>

<template>
  <v-app>
    <!-- Vuetify layout starts once here -->
    <RouterView v-slot="{ Component }">
      <VFadeTransition>
        <component :is="Component" />
      </VFadeTransition>
    </RouterView>
  </v-app>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
