<template>
  <v-container class="header-section pa-6">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="header-title">
          <span class="hi-text">Hi</span>
          <span class="username-text">username</span>
        </h1>
        <h2 class="subtitle-text">
          Are You Ready for Starting<br />
          Your Career ..!
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
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
