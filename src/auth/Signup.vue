<template>
  <v-main class="d-flex align-center justify-center">
    <!-- Card wrapper -->
    <v-card
      max-width="1024"
      class="mx-4 elevation-12 rounded-lg overflow-hidden"
    >
      <v-row no-gutters>
        <!-- ▸ Left column — trophy image -->
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-8 border-md-e border-green-darken-2"
        >
          <v-img
            src="/images/trophy.png"
            alt="Trophy"
            max-width="320"
            class="mx-auto"
            eager
            contain
          />
        </v-col>

        <!-- ▸ Right column — form -->
        <v-col cols="12" md="6" class="pa-8 d-flex flex-column align-center">
          <!-- Headings -->
          <div class="text-center mb-8">
            <div
              class="text-h4 text-green-darken-2 text-uppercase font-weight-bold"
            >
              Welcome&nbsp;to
            </div>
            <div
              class="text-h4 text-green-darken-2 text-uppercase font-weight-bold"
            >
              Unbeatable&nbsp;Team
            </div>
          </div>

          <!-- Sign‑up form -->
          <v-form v-model="valid" class="w-100" @submit.prevent="submit">
            <v-text-field
              v-model="name"
              label="Full Name"
              prepend-inner-icon="mdi-account"
              variant="underlined"
              :rules="[required]"
              class="mb-6"
            />

            <v-text-field
              v-model="email"
              label="E‑mail"
              prepend-inner-icon="mdi-email"
              variant="underlined"
              :rules="[required, emailRule]"
              class="mb-6"
            />

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              prepend-inner-icon="mdi-lock"
              variant="underlined"
              :rules="[required]"
              class="mb-8"
            />

            <!-- Sign‑up button -->
            <v-btn
              to="personalinformations"
              type="submit"
              color="green-darken-2"
              size="large"
              class="mb-6"
              block
              rounded="pill"
            >
              Sign Up
            </v-btn>

            <!-- Login link -->
            <div class="text-center text-grey">
              Already have an account?
              <RouterLink
                to="/login"
                class="text-green-darken-2 text-decoration-underline"
              >
                Login
              </RouterLink>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from "vue";

// form state
const name = ref("");
const email = ref("");
const password = ref("");
const valid = ref(false);

// basic rules
const required = (v: string) => !!v || "Required";
const emailRule = (v: string) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Invalid e‑mail";

function submit() {
  if (!valid.value) return;
  console.table({
    name: name.value,
    email: email.value,
    password: password.value,
  });
}
</script>
