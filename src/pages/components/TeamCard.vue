<template>
  <v-card class="team-card" elevation="2">
    <v-row no-gutters>
      <!-- Profile Image -->
      <v-col cols="4" md="3">
        <v-img :src="team.avatar" class="profile-image" cover height="120" />
      </v-col>

      <!-- Team Info -->
      <v-col cols="8" md="9">
        <v-card-text class="pa-3">
          <v-row no-gutters>
            <!-- Left side - Team details -->
            <v-col cols="7">
              <h3 class="team-name">{{ team.name }}</h3>
              <p class="team-description">{{ team.description }}</p>

              <div class="status-section">
                <p class="status-label">status :</p>
                <div class="status-items">
                  <v-chip
                    size="small"
                    color="info"
                    variant="flat"
                    class="status-chip"
                  >
                    {{ team.status }}
                  </v-chip>
                  <v-chip
                    size="small"
                    color="warning"
                    variant="flat"
                    class="status-chip"
                  >
                    {{ team.lookingFor }}
                  </v-chip>
                </div>
              </div>
            </v-col>

            <!-- Right side - Numbers and region -->
            <v-col cols="5" class="text-right">
              <div class="numbers-section">
                <span class="numbers-label">numbers</span>
                <span class="numbers-value">{{ team.members }}</span>
              </div>

              <div class="region-section">
                <span class="region-label">region :</span>
                <p class="region-value">{{ team.region }}</p>
              </div>

              <v-btn color="success" size="small" class="view-btn" rounded>
                View
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.team-card {
  background-color: #e8e8e8;
  border-radius: 12px;
  margin-bottom: 16px;
}

.profile-image {
  border-radius: 12px 0 0 12px;
}

.team-name {
  color: #d32f2f;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.team-description {
  color: #333;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.status-section {
  margin-top: 8px;
}

.status-label {
  color: #333;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.status-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.status-chip {
  font-size: 0.75rem;
  height: 20px;
  align-self: flex-start;
}

.numbers-section {
  margin-bottom: 8px;
}

.numbers-label {
  color: #4caf50;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
}

.numbers-value {
  color: #4caf50;
  font-size: 1.1rem;
  font-weight: 700;
}

.region-section {
  margin-bottom: 12px;
}

.region-label {
  color: #333;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
}

.region-value {
  color: #333;
  font-size: 0.9rem;
  margin-top: 2px;
}

.view-btn {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0 16px;
  height: 28px;
}

@media (max-width: 600px) {
  .team-card {
    margin-bottom: 12px;
  }

  .team-name {
    font-size: 1rem;
  }

  .numbers-value {
    font-size: 1rem;
  }
}
</style>
