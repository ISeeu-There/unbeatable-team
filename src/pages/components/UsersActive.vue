<template>
  <div class="d-flex justify-start mt-3 ga-4 overflow-x-scroll">
    <!-- Active user -->
    <div class="avatar-wrapper">
      <v-btn class="avatar-btn" elevation="0">
        <v-icon size="70" color="grey-darken-1">mdi-plus-circle</v-icon>
      </v-btn>
    </div>
    <div class="avatar-wrapper">
      <v-btn class="avatar-btn" elevation="0">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          width="80"
          height="80"
          cover
          class="rounded-circle"
        />
      </v-btn>
      <span class="online-dot"></span>
    </div>
    <div class="avatar-wrapper">
      <v-btn class="avatar-btn" elevation="0">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          width="80"
          height="80"
          cover
          class="rounded-circle"
        />
      </v-btn>
      <span class="online-dot"></span>
    </div>
    <div class="avatar-wrapper">
      <v-btn class="avatar-btn" elevation="0">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          width="80"
          height="80"
          cover
          class="rounded-circle"
        />
      </v-btn>
      <span class="online-dot"></span>
    </div>
    <div class="avatar-wrapper">
      <v-btn class="avatar-btn" elevation="0">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          width="80"
          height="80"
          cover
          class="rounded-circle"
        />
      </v-btn>
      <span class="online-dot"></span>
    </div>

    <!-- Inactive user (no dot) -->
    <div class="avatar-wrapper">
      <v-btn class="offline-avatar-btn" elevation="0">
        <v-img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          width="80"
          height="80"
          cover
          class="rounded-circle"
        />
      </v-btn>
      <span class="offline-dot"></span>
    </div>
  </div>
</template>

<style scoped>
.overflow-x-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.overflow-x-scroll::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.avatar-wrapper {
  position: relative; /* required to position the dot */
}

.avatar-btn {
  width: 100px;
  height: 100px;
  padding: 0;
  background: none;
  border-radius: 100%;
}
.offline-avatar-btn {
  width: 100px;
  height: 100px;
  padding: 0;
  background: none;
  opacity: 70%;
}

/* Dot shown for online users */
.online-dot {
  position: absolute;
  bottom: 5px;
  right: 25px;
  width: 20px;
  height: 20px;
  background-color: #22c55e; /* green */
  border-radius: 50%;
  border: 2px solid #ffffff; /* outline to stand out */
  z-index: 2;
}
.offline-dot {
  position: absolute;
  bottom: 5px;
  right: 25px;
  width: 20px;
  height: 20px;
  background-color: #494d4a; /* green */
  border-radius: 50%;
  border: 2px solid #ffffff; /* outline to stand out */
  z-index: 2;
}
.rounded-circle {
  border-radius: 50%;
  border: solid 3px green;
}
</style>
