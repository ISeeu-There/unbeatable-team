<template>
  <v-container class="search-section pa-6">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-text-field
          v-model="searchQuery"
          placeholder="find a team here"
          variant="outlined"
          class="search-field"
          hide-details
          :append-inner-icon="'mdi-magnify'"
          @click:append-inner="performSearch"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchSection",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    performSearch() {
      console.log("Searching for:", this.searchQuery);
      // Add search functionality here
    },
  },
};
</script>

<style scoped>
.search-section {
  background-color: #f5f5f5;
  padding-bottom: 30px;
}

.search-field :deep(.v-field) {
  background-color: #e0e0e0;
  border-radius: 25px;
  height: 56px;
}

.search-field :deep(.v-field__input) {
  padding: 0 20px;
  font-size: 1.1rem;
  color: #666;
}

.search-field :deep(.v-field__append-inner) {
  padding-right: 15px;
}

.search-field :deep(.v-icon) {
  color: #4caf50;
  font-size: 1.5rem;
}

.search-field :deep(.v-field__outline) {
  display: none;
}

.search-field :deep(.v-field--focused .v-field__outline) {
  display: none;
}
</style>
