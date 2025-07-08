<template>
  <v-app class="body">
    <v-main class="h-100">
      <v-container fluid class="pa-8">
        <div class="tab-header">
          <span class="tab-text">Personal Informations</span>
        </div>
        <div class="form-container">
          <div class="content-area">
            <div class="left-section">
              <div class="image-container">
                <img
                  src="/personal-info.jpg"
                  alt="Soccer Player"
                  class="soccer-image"
                />
              </div>
            </div>

            <!-- Right Side - Form -->
            <div class="right-section">
              <div class="welcome-section">
                <h1 class="welcome-title">WELCOME TO</h1>
                <h1 class="team-title">UNBEATABLE TEAM</h1>
              </div>

              <div class="form-section">
                <div class="phone">
                  <span class="dial-code">+213</span>

                  <!-- let the input stretch -->
                  <v-text-field
                    v-model="phoneNumber"
                    label="Phone Number"
                    type="number"
                    variant="underlined"
                    class="custom-input flex-grow-1"
                    color="green"
                  ></v-text-field>
                </div>

                <v-text-field
                  v-model="birthday"
                  label="Birthday"
                  type="date"
                  variant="underlined"
                  class="custom-input"
                  color="green"
                ></v-text-field>

                <div class="select-row">
                  <v-select
                    v-model="wilaya"
                    label="Select Wilaya"
                    variant="underlined"
                    class="custom-select"
                    color="green"
                    :items="wilayaOptions"
                  ></v-select>

                  <v-select
                    v-model="city"
                    label="Select City"
                    variant="underlined"
                    class="custom-select"
                    color="green"
                    :items="cityOptions"
                  ></v-select>
                </div>
              </div>

              <div class="button-section">
                <v-btn
                  to="verify"
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

<script>
export default {
  name: "App",
  data() {
    return {
      phoneNumber: "",
      birthday: "",
      wilaya: "",
      city: "",

      /* All wilayat to show in the first <v‑select> */
      wilayaOptions: [
        "Adrar",
        "Chlef",
        "Laghouat",
        "Oum El Bouaghi",
        "Batna",
        "Béjaïa",
        "Biskra",
        "Béchar",
        "Tipaza",
        "Algiers",
      ],

      /* City lists keyed by wilaya */
      citiesByWilaya: {
        Adrar: ["Adrar", "Reggane", "Timimoun"],
        Chlef: ["Chlef", "Ténès", "El Karimia"],
        Laghouat: ["Laghouat", "Aflou", "Hassi R'mel"],
        "Oum El Bouaghi": ["Oum El Bouaghi", "Aïn Beïda", "Aïn M'lila"],
        Batna: ["Batna", "Arris", "M'rouana"],
        Béjaïa: ["Béjaïa", "Amizour", "Akbou"],
        Biskra: ["Biskra", "Tolga", "El Kantara"],
        Béchar: ["Béchar", "Kenadsa", "Abadla"],
        Tipaza: ["Tipaza", "Cherchell", "Koléa"],
        Algiers: ["Algiers", "Rouïba", "Dar El Beïda"],
      },
    };
  },

  computed: {
    cityOptions() {
      return this.wilaya ? this.citiesByWilaya[this.wilaya] || [] : [];
    },
  },

  watch: {
    wilaya() {
      this.city = "";
    },
  },
};
</script>

<style scoped>
.body {
  margin: 10px;
}
.form-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.tab-header {
  margin-left: 5%;
  width: 70%;
  background: white;
  padding: 8px 20px;
  border: 2px solid #4caf50;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  z-index: 10;
}

.tab-text {
  color: #4caf50;
  font-weight: 600;
  font-size: 16px;
}

.content-area {
  border: 2px solid #4caf50;
  border-radius: 8px;
  display: flex;
  min-height: 500px;
  background: white;
  overflow: hidden;
}

.left-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: white;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soccer-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.welcome-title,
.team-title {
  color: #4caf50;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 1px;
}

.form-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.phone {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dial-code {
  font-weight: 600;
  padding: 5px;
  border: solid 1px #4caf50;
  white-space: nowrap;
  border-radius: 5px;
  margin-bottom: 15px;
}

/* make sure the v‑text‑field actually flexes */
.phone .custom-input {
  flex: 1 1 0%;
}

.select-row {
  display: flex;
  gap: 20px;
}

.custom-input,
.custom-select {
  margin-bottom: 10px;
}

.custom-select {
  flex: 1;
}

.button-section {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.next-button {
  background: #4caf50 !important;
  color: white !important;
  font-weight: 600;
  padding: 0 40px;
  height: 48px;
  text-transform: none;
  font-size: 16px;
}

/* Custom input styling */
:deep(.v-field__underline) {
  border-color: #4caf50 !important;
}

:deep(.v-field--focused .v-field__underline) {
  border-color: #4caf50 !important;
}

:deep(.v-label) {
  color: #999 !important;
}

:deep(.v-field--focused .v-label) {
  color: #4caf50 !important;
}

:deep(.v-select .v-field__outline) {
  border-color: #4caf50 !important;
}

:deep(.v-select--focused .v-field__outline) {
  border-color: #4caf50 !important;
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
