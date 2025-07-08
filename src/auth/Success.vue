<template>
  <v-app class="body">
    <v-main>
      <v-container fluid class="pa-8">
        <div class="form-container">
          <!-- Main Content Area -->
          <div class="content-area">
            <!-- Right Side - Form -->
            <div class="right-section">
              <div class="welcome-section">
                <h1 class="welcome-title">WELCOME TO</h1>
                <h1 class="team-title">UNBEATABLE TEAM</h1>
              </div>
              <div>
                <img class="check" src="/check.png" alt="" />
              </div>
              <div class="yourdream">
                <h1 class="welcome-title">Your Dream</h1>
                <h1 class="team-title">Can Be Real</h1>
              </div>
              <div>
                <v-btn
                  to="home"
                  class="next-button"
                  color="green"
                  size="large"
                  rounded="xl"
                >
                  Next
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script></script>

<style scoped>
.body {
  margin: 10px;
}
.form-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.content-area {
  border: 2px solid #4caf50;
  border-radius: 8px;
  display: flex;
  min-height: 500px;
  background: white;
  overflow: hidden;
}
.check {
  width: 100px;
  height: 100px;
  display: flex;
  justify-self: center;
}

.right-section {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}
.yourdream {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}

.welcome-title,
.team-title {
  color: #4caf50;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 1px;
}

.next-button {
  background: #4caf50 !important;
  color: white !important;
  font-weight: 600;
  padding: 0 40px;
  height: 48px;
  text-transform: none;
  font-size: 16px;
  display: flex;
  justify-self: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .content-area {
    flex-direction: column;
  }

  .divider {
    width: 100%;
    height: 2px;
  }

  .select-row {
    flex-direction: column;
    gap: 10px;
  }

  .welcome-title,
  .team-title {
    font-size: 24px;
  }
}
</style>
