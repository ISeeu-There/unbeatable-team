<template>
  <v-container class="header-section pa-6">
    <v-row justify="space-around">
      <div style="margin-top: 50px; margin-right: auto">
        <h1 style="color: #4caf50">Your Friends</h1>
        <span style="color: gray">250 friends</span>
      </div>
      <v-btn icon class="profile-btn" @click="performSearch">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          class="profile-image"
          cover
        />
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile-btn {
  margin-top: 10px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #4caf50;
  transition: background-color 0.2s;
}
.header-section {
  background-color: #f5f5f5;
  padding-top: 40px;
  padding-bottom: 30px;
}

.header-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 1.2;
}

.hi-text {
  color: #4caf50;
  font-weight: 700;
}

.username-text {
  color: #333;
  font-weight: 900;
}

.subtitle-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .header-title {
    font-size: 2.2rem;
  }

  .subtitle-text {
    font-size: 1.4rem;
  }
}
</style>
