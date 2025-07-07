<template>
  <v-bottom-navigation v-model="activeTab" class="bottom-nav" height="70" grow>
    <v-btn value="search">
      <v-icon size="28" color="success">mdi-account-plus</v-icon>
    </v-btn>

    <v-btn value="trophy">
      <v-icon size="28" color="success">mdi-trophy</v-icon>
    </v-btn>

    <v-btn value="home" class="home-btn">
      <v-icon size="32" color="white">mdi-home</v-icon>
    </v-btn>

    <v-btn value="group">
      <v-icon size="28" color="success">mdi-account-group</v-icon>
    </v-btn>

    <v-btn value="profile">
      <v-icon size="28" color="success">mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  data() {
    return {
      activeTab: "home",
    };
  },
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
}

.home-btn {
  background-color: #4caf50 !important;
  border-radius: 10% !important;
}

.home-btn :deep(.v-btn__content) {
  width: 100%;
  height: 100%;
}

:deep(.v-bottom-navigation .v-btn) {
  min-width: 0;
  flex: 1;
}

:deep(.v-bottom-navigation .v-btn:not(.home-btn)) {
  background-color: transparent !important;
}

:deep(.v-bottom-navigation .v-btn--active:not(.home-btn)) {
  background-color: transparent !important;
}
</style>
