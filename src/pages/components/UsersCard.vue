<template>
  <!-- parent flex container that centers the button horizontally -->
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
  <div class="d-flex justify-center mt-10">
    <!-- the button itself -->
    <v-btn class="team-card px-0 d-flex align-center ga-3" rounded="lg">
      <!-- avatar -->
      <v-img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        class="profile-image"
        cover
      />

      <!-- main content -->
      <div class="flex-grow-1">
        <div class="d-flex">
          <div>
            <h3 class="team-name mb-1">User Name</h3>
            <p class="status-label">
              <span class="font-weight-bold">USER NAME&nbsp;:</span> last
              message
            </p>
          </div>
          <span class="numbers-label ml-4">2d ago</span>
        </div>
      </div>
    </v-btn>
  </div>
</template>

<script setup>
/* no logic here yet – purely presentational */
</script>

<style scoped>
/* ---------- Button ---------- */
.team-card {
  background-color: #e8e8e8;
  height: 90px;
  width: 100%;
  max-width: 600px;
}

/* ---------- Avatar ---------- */
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* ---------- Text ---------- */
.team-name {
  color: #d32f2f;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  justify-self: start;
  margin-left: 15px;
}

.status-label {
  color: #bebebe;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  justify-self: start;
  margin-left: 15px;
}

.numbers-label {
  color: #828682;
  font-size: 0.7rem;
  font-weight: 600;
}

/* ---------- Responsive tweak ---------- */
@media (max-width: 600px) {
  .team-card {
    height: 80px;
  }
  .team-name {
    font-size: 1rem;
  }
}
</style>
