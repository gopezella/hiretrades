import { createApp } from "vue";

import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).mount("#app");
