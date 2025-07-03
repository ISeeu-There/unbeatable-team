import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify core styles
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Material Design Icons (for default Vuetify icons)
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
