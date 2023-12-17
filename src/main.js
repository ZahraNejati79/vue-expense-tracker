import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
import "vue3-toastify/dist/index.css";
import router from "./router/router";
import Unicon from "vue-unicons";
import {
  uniHome,
  uniSignout,
  uniBookMedical,
  uniChart,
  uniUserSquare,
  uniSignin,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniHome,
  uniSignout,
  uniBookMedical,
  uniChart,
  uniUserSquare,
  uniSignin,
]);

const app = createApp(App);
app.use(router);
app.use(Unicon);
app.component("DatePicker", Vue3PersianDatetimePicker);
app.mount("#app");
