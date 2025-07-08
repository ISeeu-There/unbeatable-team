<template>
  <v-app>
    <v-main>
      <v-container fluid class="portfolio-container">
        <!-- Header -->
        <v-row justify="center" class="mb-6">
          <v-col cols="12" class="text-center">
            <h1 class="analysis-title fade-in-up gradient-text">Analysis</h1>
          </v-col>
        </v-row>

        <!-- Main Content -->
        <v-row justify="center mb-10">
          <v-col cols="12" md="8" lg="6">
            <!-- Player Card -->
            <v-card
              class="player-card mb-6 fade-in-up"
              elevation="8"
              style="animation-delay: 0.1s"
            >
              <div class="card-background">
                <div class="player-avatar-container">
                  <div class="player-avatar">
                    <!-- Placeholder for player image -->
                    <v-icon size="80" color="white">mdi-account</v-icon>
                  </div>
                </div>
              </div>

              <!-- Stats Row -->
              <v-card-text class="stats-row">
                <v-row align="center" justify="space-between">
                  <v-col cols="4" class="text-center">
                    <div class="stat-label">views</div>
                    <div class="stat-value">150</div>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <v-btn
                      variant="outlined"
                      size="small"
                      class="edit-profile-btn"
                      rounded
                      @click="editProfile"
                    >
                      edit profile
                    </v-btn>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <div class="stat-label">likes</div>
                    <div class="stat-value likes-value">99</div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Bio Section -->
            <v-btn
              class="bio-section mb-6 fade-in-up"
              elevation="2"
              style="animation-delay: 0.2s"
            >
              <v-card-text class="bio-text"> Bio </v-card-text>
            </v-btn>

            <!-- Game Stats -->
            <v-row class="mb-6 fade-in-up" style="animation-delay: 0.3s">
              <v-col cols="12" sm="6">
                <div class="game-stat">
                  <span class="stat-label-green">played</span>
                  <span class="stat-number">23</span>
                  <span class="stat-label-gray">game</span>
                </div>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="text-right text-sm-right text-left"
              >
                <div class="position-stat">
                  <span class="stat-label-green">Position</span>
                  <span class="position-value">ST</span>
                </div>
                <div class="win-loss-stats">
                  <span>goals: 15</span>
                  <span>assists : 08</span>
                </div>
              </v-col>
            </v-row>

            <!-- Win/Loss Stats -->
            <v-row class="mb-6 fade-in-up" style="animation-delay: 0.4s">
              <v-col cols="12">
                <div class="win-loss-stats">
                  <div class="stat-item">
                    <span class="stat-label-gray">win :</span>
                    <span class="stat-number-green">20</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label-gray">lose :</span>
                    <span class="stat-number-red">2</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label-gray">draw :</span>
                    <span class="stat-number-yellow">1</span>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- Radar Chart -->
            <v-row class="fade-in-up" style="animation-delay: 0.5s">
              <v-col cols="12" class="text-center">
                <RadarChart />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import BottomNavigation from "./BottomNavigation.vue";
import RadarChart from "./RadarChart.vue";

const editProfile = () => {
  console.log("Edit profile clicked");
  // Add edit profile functionality here
};

const navigateTo = (section) => {
  console.log(`Navigate to ${section}`);
  // Add navigation functionality here
};
</script>

<style scoped>
.portfolio-container {
  min-height: 100vh;
  padding: 20px;
}

.analysis-title {
  font-size: 3rem;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.player-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.card-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player-avatar-container {
  position: relative;
}

.player-avatar {
  width: 120px;
  height: 120px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid #ff4444;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.player-avatar:hover {
  transform: scale(1.05);
}

.stats-row {
  background: white;
  padding: 20px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: lowercase;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}

.likes-value {
  color: #ff4444;
}

.edit-profile-btn {
  border-color: #ccc;
  color: #666;
  text-transform: lowercase;
}

.bio-section {
  display: flex;
  justify-self: center;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  background: #f0f0f0;
}

.bio-text {
  color: #999;
  text-align: center;
  padding: 30px;
  font-size: 1.1rem;
}

.game-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.position-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.stat-label-green {
  color: #4caf50;
  font-weight: 500;
}

.stat-label-gray {
  color: #666;
  font-weight: 500;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.position-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4444;
}

.win-loss-stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  text-transform: capitalize;
  font-weight: bold;
  gap: 8px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-number-green {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50;
}

.stat-number-red {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff4444;
}

.stat-number-yellow {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffc107;
}

.bottom-nav {
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-btn {
  background: #4caf50 !important;
  color: white !important;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .analysis-title {
    font-size: 2rem;
  }

  .card-background {
    height: 150px;
  }

  .player-avatar {
    width: 80px;
    height: 80px;
  }

  .stats-row {
    padding: 15px;
  }

  .game-stat,
  .position-stat {
    justify-content: center;
    text-align: center;
  }

  .text-sm-right {
    text-align: center !important;
  }
}
</style>
