<template>
  <v-bottom-navigation
    v-model="activeTab"
    class="bottom-nav"
    height="70"
    :style="`--active-index: ${activeIndex}`"
  >
    <v-btn
      v-for="btn in navButtons"
      :key="btn.value"
      @click="handleTabChange((activeTab = btn.value))"
      variant="plain"
      class="nav-btn"
    >
      <v-icon :size="btn.size" :color="iconColor(btn.value)">
        {{ btn.icon }}
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navButtons = [
  { value: "friends", icon: "mdi-account-plus", size: 28 },
  { value: "trophy", icon: "mdi-trophy", size: 28 },
  { value: "home", icon: "mdi-home", size: 32 },
  { value: "group", icon: "mdi-account-group", size: 28 },
  { value: "portfolio", icon: "mdi-account-circle", size: 28 },
];

const activeTab = ref(route.name || "home");

watch(activeTab, (tab) => console.log({ tab }), { immediate: true });

const handleTabChange = (selectedTab) => {
  if (selectedTab !== route.name) {
    router.push({ name: selectedTab });
  }
};

const activeIndex = computed(() =>
  navButtons.findIndex((b) => b.value === activeTab.value)
);

const iconColor = (value) => (value === activeTab.value ? "white" : "success");
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
  --btn-count: 5;
  --active-index: 0;
}

.bottom-nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% / var(--btn-count));
  height: 100%;
  background: #4caf50;
  border-radius: 10%;
  transition: transform 0.3s ease;
  transform: translateX(calc(var(--active-index) * 100%));
  z-index: -1;
}

.nav-btn {
  flex: 1 1 0;
  min-width: 0;
}

:deep(.v-btn__content) {
  width: 100%;
  height: 100%;
}

:deep(.v-icon) {
  transition: color 0.2s ease;
}
</style>
