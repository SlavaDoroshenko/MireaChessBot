import { createApp } from "vue";
import "./style.css";
import { init } from "@telegram-apps/sdk-vue";
import App from "./App.vue";

init();

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}
createApp(App).mount("#app");
