<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-8">
        <!-- Progress Indicator -->
        <div class="d-flex justify-space-between mt-4">
          <div class="progress-step">
            <v-icon color="white" size="24">mdi-check</v-icon>
          </div>
          <div class="progress-tab">
            <span class="tab-text">Verify Your Number</span>
          </div>
        </div>

        <div class="form-container">
          <!-- Main Content Area -->
          <div class="content-area">
            <!-- Left Side - Empty for layout balance -->
            <div class="left-section">
              <!-- Empty space to match the layout -->
            </div>

            <!-- Right Side - Verification Form -->
            <div class="right-section">
              <div class="welcome-section">
                <h1 class="welcome-title">WELCOME TO</h1>
                <h1 class="team-title">UNBEATABLE TEAM</h1>
              </div>

              <div class="verification-section">
                <div class="resend-text">resend in {{ countdown }}s</div>

                <!-- ⛑️  QUICK PATCH – use the data & methods you already declared -->
                <div class="otp-row mb-10">
                  <v-text-field
                    v-for="(_, idx) in verificationCode"
                    :key="idx"
                    v-model="verificationCode[idx]"
                    maxlength="1"
                    hide-details
                    color="green"
                    type="text"
                    outlined
                    class="otp-input"
                    @input="handleInput(idx, $event)"
                    @keydown="handleKeydown(idx, $event)"
                    :ref="
                      (el) => {
                        if (el) codeInputs[idx] = el;
                      }
                    "
                  />
                </div>
              </div>

              <div class="d-flex justify-space-between mt-4">
                <v-btn color="green" to="personalinformations" @click="goBack"
                  >Back</v-btn
                >
                <v-btn color="green" to="success" @click="goNext">Next</v-btn>
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
      verificationCode: ["", "", "", "", "", ""],
      countdown: 60,
      codeInputs: [],
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    handleInput(index, event) {
      const value = event.target.value;
      if (value && index < 5) {
        // Move to next input
        this.$nextTick(() => {
          if (this.codeInputs[index + 1]) {
            this.codeInputs[index + 1].focus();
          }
        });
      }
    },
    handleKeydown(index, event) {
      if (
        event.key === "Backspace" &&
        !this.verificationCode[index] &&
        index > 0
      ) {
        // Move to previous input on backspace
        this.$nextTick(() => {
          if (this.codeInputs[index - 1]) {
            this.codeInputs[index - 1].focus();
          }
        });
      }
    },
    startCountdown() {
      const timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.progress-container {
  display: flex;
  justify-content: space-around;
  gap: 8px;
}

.progress-step {
  width: 60px;
  height: 40px;
  background: #4caf50;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.progress-tab {
  background: white;
  margin-left: 30%;
  margin-bottom: 10px;
  width: 70%;
  padding: 8px 20px;
  border: 2px solid #4caf50;
  border-radius: 8px;
}

.tab-text {
  color: #4caf50;
  font-weight: 600;
  font-size: 16px;
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

.left-section {
  flex: 1;
  background: white;
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

.verification-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.otp-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
}

.otp-input .v-input__control {
  width: 56px;
  height: 56px;
}

@media (max-width: 480px) {
  .otp-input .v-input__control {
    width: 44px;
    height: 52px;
  }
}
.otp-input :deep(.v-field__outline) {
  border-color: #4caf50 !important;
  border-width: 2px !important;
  border-style: solid;
  border-radius: 6px;
}

.otp-input :deep(.v-field--focused .v-field__outline) {
  border-color: #2e7d32 !important;
}
.resend-text {
  color: #4caf50;
  font-size: 16px;
  font-weight: 500;
}

.code-inputs {
  display: flex;
  gap: 15px;
}

.code-input {
  size: 10px;
}

.code-input :deep(.v-field__input) {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  padding: 0;
}

.code-input :deep(.v-field__outline) {
  border-color: #4caf50 !important;
  border-width: 2px !important;
}

.code-input :deep(.v-field--focused .v-field__outline) {
  border-color: #4caf50 !important;
}

.button-section {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.back-button,
.next-button {
  background: #4caf50 !important;
  color: white !important;
  font-weight: 600;
  padding: 0 40px;
  height: 48px;
  text-transform: none;
  font-size: 16px;
}

/* Responsive design */
@media (max-width: 768px) {
  .progress-container {
    flex-direction: column;
    gap: 10px;
  }

  .progress-line {
    width: 100%;
    height: 2px;
  }

  .content-area {
    flex-direction: column;
  }

  .divider {
    width: 100%;
    height: 2px;
  }

  .code-inputs {
    flex-wrap: wrap;
    gap: 10px;
  }

  .code-input {
    width: 50px;
    height: 70px;
  }

  .welcome-title,
  .team-title {
    font-size: 24px;
  }

  .button-section {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
