<template>
  <v-container class="search-section pa-6">
    <v-row align="center" class="flex-nowrap ga-4">
      <!-- Circle search button -->
      <v-btn icon class="search-btn" @click="performSearch">
        <v-icon size="28">mdi-magnify</v-icon>
      </v-btn>

      <!-- Search field -->
      <v-text-field
        v-model="searchQuery"
        class="flex-grow-1 search-field"
        variant="solo"
        placeholder="Find a friend"
        hide-details
        @click:append-inner="performSearch"
      />
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

function performSearch() {
  console.log("Searching for:", searchQuery.value);
  // TODO: call Firestore / API, emit event, etc.
}
</script>

<style scoped>
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.search-section {
  background-color: #f5f5f5;
}

/* ---------- Circle button ---------- */
.search-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #e0e0e0;
  transition: background-color 0.2s;
}
.search-btn:hover {
  background-color: #d5d5d5;
}

/* ---------- Text field ---------- */
.search-field :deep(.v-field) {
  background-color: #e0e0e0; /* same tone as button */
  border-radius: 25px;
  height: 56px;
}
.search-field :deep(.v-field__input) {
  padding: 0 20px;
  font-size: 1.1rem;
  color: #666;
}
/* Icon colour */
.search-field :deep(.v-icon) {
  color: #4caf50;
  font-size: 1.5rem;
}
</style>
