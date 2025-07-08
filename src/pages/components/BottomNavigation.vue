<template>
  <!-- Expose the active index as a CSS variable -->
  <v-bottom-navigation
    v-model="activeTab"
    class="bottom-nav"
    height="70"
    grow
    :style="`--active-index: ${activeIndex}`"
  >
    <!-- Define your buttons in a single array so index math is trivial -->
    <v-btn
      v-for="btn in navButtons"
      :key="btn.value"
      :value="btn.value"
      variant="plain"
      class="nav-btn"
    >
      <v-icon :size="btn.size" :color="iconColor(btn.value)">
        {{ btn.icon }}
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  data() {
    return {
      activeTab: "home",
      navButtons: [
        { value: "search", icon: "mdi-account-plus", size: 28 },
        { value: "trophy", icon: "mdi-trophy", size: 28 },
        { value: "home", icon: "mdi-home", size: 32 },
        { value: "group", icon: "mdi-account-group", size: 28 },
        { value: "profile", icon: "mdi-account-circle", size: 28 },
      ],
    };
  },
  computed: {
    activeIndex() {
      return this.navButtons.findIndex((b) => b.value === this.activeTab);
    },
  },
  methods: {
    iconColor(value) {
      return value === this.activeTab ? "white" : "success";
    },
  },
};
</script>

<style scoped>
/* --- Layout & bar --- */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;

  /* Number of buttons (kept in sync with navButtons.length) */
  --btn-count: 5;
  --active-index: 0; /* overwritten by inline style */
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
  z-index: -1; /* keep it behind the buttons */
}

/* --- Button tweaks --- */
.nav-btn {
  flex: 1 1 0; /* each btn takes equal space */
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
