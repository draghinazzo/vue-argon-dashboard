import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import axios from "axios";
import BootstrapVue3 from "bootstrap-vue-3";

// Importar estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Configurar Axios
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
//axios.defaults.baseURL = "http://192.168.1.135:8000/api";

// Crear la app
const appInstance = createApp(App);
appInstance.config.globalProperties.$axios = axios;

appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(BootstrapVue3); // Habilitar BootstrapVue 3

appInstance.mount("#app");
