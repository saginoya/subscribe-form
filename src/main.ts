import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import "./assets/sass/style.scss";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(mdiVue, {
  icons: mdijs,
});

app.mount("#app");
