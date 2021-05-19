import { createApp } from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import { uniAngleUp } from "vue-unicons/dist/icons";

Unicon.add([uniAngleUp]);

createApp(App)
  .use(Unicon)
  .mount("#app");
