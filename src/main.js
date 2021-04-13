import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// import New from "./store/New";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/style.scss";

const app = createApp(App);
app.use(store);

store.dispatch("tickers/loadTickers").then(() => app.mount("#app"));
