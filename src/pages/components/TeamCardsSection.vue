<template>
  <v-container class="team-cards-section pa-6">
    <v-row>
      <v-col v-for="team in teams" :key="team.id" cols="12" class="mb-4">
        <TeamCard :team="team" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamCard from "./TeamCard.vue";

export default {
  name: "TeamCardsSection",
  components: {
    TeamCard,
  },
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "Team name",
          description: "description",
          status: "Looking for a match",
          lookingFor: "Looking for players",
          members: "3/6",
          region: "village/city",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 2,
          name: "Team name",
          description: "description",
          status: "Looking for a match",
          lookingFor: "Looking for players",
          members: "3/6",
          region: "village/city",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 3,
          name: "Team name",
          description: "description",
          status: "Looking for a match",
          lookingFor: "Looking for players",
          members: "3/6",
          region: "village/city",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 4,
          name: "Team name",
          description: "description",
          status: "Looking for a match",
          lookingFor: "Looking for players",
          members: "3/6",
          region: "village/city",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-cards-section {
  background-color: #f5f5f5;
  padding-bottom: 100px; /* Space for bottom navigation */
}
</style>
