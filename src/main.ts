import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#4CAF50",
          secondary: "#81C784",
          accent: "#66BB6A",
          error: "#F44336",
          warning: "#FF9800",
          info: "#2196F3",
          success: "#4CAF50",
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
